import { useState, useEffect, useRef } from "react"
import { StyleSheet, View, Text } from "react-native"
import useUpdateEffect from "../hooks/useUpdateEffect"

import MapView, { Marker, LatLng, Region } from "react-native-maps"
import * as Location from "expo-location"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import MapViewDirections from 'react-native-maps-directions';

import { GOOGLE_MAPS_API_KEY } from "../../environment"

import customStyle from "../constants/MapStile"

interface distDur{
    distance: number, 
    duration: number 
}

export default function MapScreen() {
    const [location, setLocation] = useState<LatLng | null>(null);
    const [destination, setDestination] = useState<LatLng | null>(null);
    const [showDirections, setShowDirections] = useState<boolean>(false);
    const [permissionGranted, setPermissionGranted] = useState<boolean>(false);
    const [distanceAndDuration, setDistanceAndDuration] = useState<distDur | null>(null);
    const MapRef = useRef<MapView>(null);

    useEffect(() => {
        const getCurrentPosition = async () => {

            if (!permissionGranted) {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    alert("Permission to access location was denied");
                    return;
                }
                setPermissionGranted(true);
            }

            let { coords } = await Location.getCurrentPositionAsync({});
            setLocation(coords);
        }

        getCurrentPosition();
        // setInterval(() => {
        //     getCurrentPosition();
        //     compareNearbyPoints(location, destination) && console.log("You are near the destination");
        // } , 1000);
    }, []);

    useUpdateEffect(() => {
        if(distanceAndDuration){
            if (distanceAndDuration.distance > 8) {
                alert("this is too much for begginer walkers, try to find a closer destination");
                setDestination(null);
            }

        }
    }, [distanceAndDuration]);

    function compareNearbyPoints(point1: any, point2: any) {
        if (point1 === null || point2 === null) return false;
        const distance = Math.sqrt(Math.pow(point1?.latitude - point2?.latitude, 2) + Math.pow(point1?.longitude - point2?.longitude, 2));
        alert(distance);
        return distance < 1000;
    }

    if (!location) {
        return <View style={styles.container}>
            <Text>Loading...</Text>
        </View>;
    }

    const moveTo = async (position: LatLng) => {
        const camera = await MapRef.current?.getCamera();
        if (camera) {
            camera.center = position;
            MapRef.current?.animateCamera(camera, { duration: 600 });
        }
    }

    const traceRoute = async () => {
        if (destination) {
            MapRef.current?.fitToCoordinates([location, destination], { edgePadding: { top: 200, right: 60, bottom: 200, left: 60 }, animated: true });
        }
    }

    const traceRouteOnReady = (args: any) => {
        const { distance, duration } = args;
        console.log(`Distance: ${distance} km`)
        console.log(`Duration: ${duration} min.`)
        setDistanceAndDuration({ distance, duration });
    }

    const onPlaceSelect = (data: any, details: any = null) => {
        setShowDirections(false);
        const { lat, lng } = details.geometry.location;
        setDestination({ latitude: lat, longitude: lng });
        moveTo({ latitude: lat, longitude: lng });  
    }

    const initialRegion: Region = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            <MapView ref={MapRef} style={styles.map} initialRegion={initialRegion} provider="google" customMapStyle={customStyle}>
                <Marker
                    title="You are here"
                    pinColor="blue"
                    draggable={true}
                    onDragEnd={(e) => {
                        setLocation(e.nativeEvent.coordinate);
                        setShowDirections(false);
                    }}
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                    
                />
                {destination && <Marker
                    title="Destination"
                    pinColor="red"
                    coordinate={{
                        latitude: destination.latitude,
                        longitude: destination.longitude,
                    }}
                    onPress={() => setShowDirections((prev)=>{
                        !prev && traceRoute();
                        return !prev
                    })}
                />}
                {destination && showDirections && <MapViewDirections
                    origin={location}
                    destination={destination}
                    apikey={GOOGLE_MAPS_API_KEY}
                    strokeWidth={6}
                    strokeColor="hotpink"
                    mode="WALKING"
                    onReady={traceRouteOnReady}
                />}
            </MapView>
            <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails={true}
                onPress={onPlaceSelect}
                query={{key: GOOGLE_MAPS_API_KEY, language: 'en',}}
                styles={SearchStyle}
                currentLocation={true}
                currentLocationLabel="Current location"
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
    
});

const SearchStyle = {
    textInput: {
        backgroundColor: '#eee',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    textInputContainer: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    listView: {
        backgroundColor: '#eee',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    predefinedPlacesDescription: {
        color: '#1faadb',
    },
}
