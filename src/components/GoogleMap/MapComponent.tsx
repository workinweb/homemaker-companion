"use client";

import React, { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Card, CardBody, Skeleton } from "@nextui-org/react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { icon } from "leaflet";

import Image from "next/image";
import "leaflet/dist/leaflet.css";

export function MapComponent() {
    const libraries = useMemo(() => ["places"], []);
    const mapCenter = useMemo(
        () => ({ lat: 28.34732370882098, lng: -81.41418625023127 }),
        [],
    );

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            mapTypeControl: true,
            mapTypeControlOptions: {
                // style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                mapTypeIds: ["roadmap", "satellite"],
            },
            clickableIcons: true,
            scrollwheel: true,
        }),
        [],
    );

    const ICON = icon({
        iconUrl: "/location.png",
        iconSize: [32, 32],
    });
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDwFMHUzK4CWPQh-WRwH4oSRa7Xa9MEPPk",
        libraries: libraries as never,
    });

    if (!isLoaded) {
        return (
            <Card className="h-[680px] w-full max-w-[520px]">
                <CardBody>
                    <Skeleton className="rounded-lg">
                        <div className="h-[680px] rounded-lg bg-default-300"></div>
                    </Skeleton>
                </CardBody>
            </Card>
        );
    }

    return (
        <Card className="h-[680px] w-full max-w-[520px]">
            <CardBody>
                <div className="flex justify-center p-4">
                    <Image
                        width={100}
                        height={100}
                        src="/logo.webp"
                        alt={"Evan Home Care Logo"}
                    />
                </div>
                <p className="mb-2 text-center font-bold text-primary">
                    Find Us on the Map
                </p>
                <p className="mb-2 text-center text-primary">
                    1101 Miranda Ln. Suite 127 Kissimmee, FL 34741{" "}
                </p>
                {/* 
                <GoogleMap
                    options={mapOptions}
                    zoom={18}
                    center={mapCenter}
                    mapTypeId={google.maps.MapTypeId.ROADMAP}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    onLoad={() => console.log("Map Component Loaded...")}
                >
                    <MarkerF
                        position={mapCenter}
                        onLoad={() => console.log("Marker Loaded")}
                    />
                </GoogleMap> */}

                <MapContainer
                    center={[28.34732370882098, -81.41418625023127]}
                    zoom={17}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={[28.34732370882098, -81.41418625023127]}
                        icon={ICON}
                    >
                        <Popup>
                            Evan Home Care, 1101 Miranda Ln. Suite 127
                            Kissimmee, FL 34741
                        </Popup>
                    </Marker>
                </MapContainer>
            </CardBody>
        </Card>
    );
}
