import { Request, Response, NextFunction } from "express";
import httpProxy from "http-proxy"
const backendServers = [
    "http://localhost:5001", //Catalog Service
    "http://localhost:5002", //Catalog Inventory
    "http://localhost:3003",
    "http://localhost:3004",
];

let currentServerIndex = 0;

const proxy = httpProxy.createProxyServer({});

// Round-robin load balancer middleware
export const loadBalancer = (req: Request, res: Response, next: NextFunction) => {
  const target = backendServers[currentServerIndex];
  currentServerIndex = (currentServerIndex + 1) % backendServers.length;

  proxy.web(req, res, { target }, (error) => {
    if (error) {
      console.error(`Error forwarding request to ${target}:`, error);
      res.status(500).send("Error forwarding request");
    }
  });
};