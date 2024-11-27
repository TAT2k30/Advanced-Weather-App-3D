import * as d3 from 'd3';
import { useEffect, useRef } from "react";
import worldGeoJson from '../../assets/GeoJson/world/world.geo.json';
import { FeatureCollection } from "geojson";
import { splitGeoJsonByChunks } from '../../utils/d3.utils';

export const LazyChunkMap: React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);


    useEffect(() => {
        if (!svgRef.current) return;

        // 1. Thiết lập kích thước SVG
        const width = window.innerWidth;
        const height = window.innerHeight;
        const svg = d3
            .select(svgRef.current)
            .attr("width", "100vw")
            .attr("height", "100vh")
            .style("border", "1px solid black")
            .style("background-color", "#eef");

        // 2. Kiểm tra dữ liệu GeoJSON
        const geoData = (worldGeoJson as FeatureCollection).features;
        console.log("GeoJSON data:", geoData);
        if (!geoData.length) {
            console.error("GeoJSON không có dữ liệu!");
            return;
        }

        // 3. Projection và Path
        const projection = d3
            .geoMercator()
            .scale(200)
            .translate([width / 2, height / 2]);

        const path = d3.geoPath().projection(projection);

        // 4. Vẽ GeoJSON
        svg
            .selectAll("path")
            .data(geoData)
            .enter()
            .append("path")
            .attr("d", path as any)
            .attr("fill", "lightblue")
            .attr("stroke", "black")
            .attr("stroke-width", 0.2)
            .on("mouseover", function () {
                d3.select(this).attr("fill", "orange");
            })
            .on("mouseout", function () {
                d3.select(this).attr("fill", "lightblue");
            })
            .on("click", function (event, d) {
                alert(`Bạn đã click vào: ${d.properties!.name}`);
            });

        // 5. Thêm zoom và pan
        const zoom = d3
            .zoom<SVGSVGElement, unknown>()
            .scaleExtent([1, 8])
            .on("zoom", (event) => {
                svg.selectAll("path").attr("transform", event.transform);
            });

        svg.call(zoom);
    }, []);

    return <svg ref={svgRef}></svg>;
};
