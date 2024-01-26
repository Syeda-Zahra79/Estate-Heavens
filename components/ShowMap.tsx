'use client'

import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef } from "react"



export default function ShowMap({latitude , longitude} : any) {
    const mapRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        
        const initMap = async() => {
            const loader = new Loader({
                apiKey : process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly'
            })
            
            const { Map } = await loader.importLibrary('maps')

            const position = {
                lat: +latitude,
                lng:+longitude,
            }

            //init a marker
            const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;
            
            // map options
            const mapOptions : google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId : "MY_NEXTJS_MAPID",
            }

            //setup the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

            // put up a marker
            const marker = new Marker({
                map: map,
                position: position,
            })
            
            
        }
        initMap();
    },[])
    return(
        <> 
            <div className="h-[600px]" ref={mapRef} />
           
        </>
    )
}