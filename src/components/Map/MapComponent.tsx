"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { icon } from "leaflet";

import Image from "next/image";
import "leaflet/dist/leaflet.css";

export function MapComponent() {
    const ICON = icon({
        iconUrl: "/location.png",
        iconSize: [32, 32],
    });

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
