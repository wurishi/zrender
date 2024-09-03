import * as d3 from 'd3';
import Animatable from "./Animatable";
import Animator from "./Animator";
import BoundingRect from "./BoundingRect";
import color from "./color";
import {
    Displayable, Arc, BezierCurve, Circle, CompoundPath,
    Droplet, Ellipse, Heart, Image, Isogon,
    Line, Path, Polygon, Polyline,
    Rect, Rose, Sector, Star,
    Text, Trochoid,
} from "./Displayable";
import Element from "./Element";
import Eventful from "./Eventful";
import findExtends from "./findLinks/findExtends";
import Gradient from "./Gradient";
import Group from "./Group";
import LinearGradient from "./LinearGradient";
import matrix from "./matrix";
import path from "./path";
import Pattern from "./Pattern";
import RadialGradient from "./RadialGradient";
import Transformable from "./Transformable";
import { ClassType } from "./type";
import util from "./util";
import vector from "./vector";
import zrender from "./zrender";

const classRecord: Record<string, ClassType> = {
    Animatable, Animator, BoundingRect, color,
    Displayable, Arc, BezierCurve, Circle, CompoundPath,
    Droplet, Ellipse, Heart, Image, Isogon,
    Line, Path, Polygon, Polyline,
    Rect, Rose, Sector, Star,
    Text, Trochoid,
    Element, Eventful,
    Gradient, Group,
    LinearGradient, matrix, path,
    Pattern, RadialGradient,
    Transformable, util, vector, zrender
}

const createNodes = () => {
    const nodes: Array<{ id: string, data: ClassType, index: number } & any> = [];
    let index = 0;
    const idToIndex: Record<string, number> = {};
    Object.entries(classRecord).forEach(([key, clsType]) => {
        const i = index++;
        nodes.push({ id: key, data: clsType, index: i });
        idToIndex[key] = i;
    });

    type Link = {
        source: string;
        target: string;
        type: string;
    }

    const methods: ((map: Record<string, ClassType>) => Link[])[] = [];

    const svg = d3.select('svg');
    svg.attr('width', innerWidth);
    svg.attr('height', innerHeight);
    svg.attr('viewBox', [-innerWidth / 2, -innerHeight / 2, innerWidth, innerHeight]);

    const g = svg.append('g');
    const zoom = d3.zoom<any, unknown>()
        .scaleExtent([0.1, 10])
        .on('zoom', evt => {
            g.attr('transform', `scale(${evt.transform.k})`);
        });
    svg.call(zoom);

    const forceSimulation = d3.forceSimulation()
        .alphaDecay(0.5)
        .alphaMin(0.1)
        .force('link', d3.forceLink().distance(100))
        .force('charge', d3.forceManyBody())
        .force('x', d3.forceX().strength(0.1))
        .force('y', d3.forceY().strength(0.1 * (innerWidth / innerHeight)))
        .force('collide', d3.forceCollide().radius(30))
        .force('center', d3.forceCenter(0, 0));

    forceSimulation.nodes(nodes).on('tick', ticked);

    const g_links = g.append('g');

    const g_nodes = g.selectAll('.circle')
        .data(nodes)
        .enter()
        .append('g')
        .call(drag(forceSimulation));

    g_nodes.append('circle')
        .attr('r', 5)
        .attr('fill', '#f00');

    g_nodes.append('text')
        .attr('text-anchor', 'middle')
        .text(d => d.data.name);

    const result = {
        addFindLinks(method: (map: Record<string, ClassType>) => Link[]) {
            methods.push(method);
            return result;
        },
        createLinks() {
            const links = methods.reduce((p, c) => {
                return p.concat(c(classRecord) as any)
            }, []).map((v: any) => ({
                ...v, source: idToIndex[v.source], target: idToIndex[v.target]
            }));

            (forceSimulation.force('link') as any)
                .links(links);
            g_links.selectAll('line')
                .data(links)
                .enter()
                .append('line')
                .attr('stroke', 'grey')
                .attr('stroke-width', 1);
        }
    };

    function ticked() {
        g_nodes.attr('transform', d => `translate(${d.x},${d.y})`);

        const allLinks = g_links.selectAll('line');
        allLinks.attr('x1', (d: any) => d.source.x);
        allLinks.attr('y1', (d: any) => d.source.y);
        allLinks.attr('x2', (d: any) => d.target.x);
        allLinks.attr('y2', (d: any) => d.target.y);
    }

    function drag(simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>): any {
        function dragStart(_: any, d: any) {
            simulation.alphaTarget(.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(evt: any, d: any) {
            d.fx = evt.x;
            d.fy = evt.y;
        }
        function dragEnd(_: any, d: any) {
            simulation.alphaTarget(0);
            // d.fx = null;
            // d.fy = null;
        }
        return d3.drag()
            .on('start', dragStart)
            .on('drag', dragged)
            .on('end', dragEnd);
    }

    return result;
}

createNodes()
    .addFindLinks(findExtends)
    .createLinks();

