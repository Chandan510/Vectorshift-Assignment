from fastapi import FastAPI, Form
from typing import List, Dict
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class PipelineRequest(BaseModel):
        edges: List
        nodes: List

def buildGraph(nodes,edges):
    graph = {}
    
    for node in nodes:
        print(node["id"])
        
        graph[node["id"]] = []

    for edge in edges:
        graph[edge["source"]].append(edge["target"])

    return graph

def dfs(currNode, graph, visited, recPath ):
    visited[currNode] = True
    recPath[currNode] = True
    
    for neighbor in graph[currNode]:
        if not visited[neighbor]:
            if dfs(neighbor, graph, visited, recPath):
                return True
        elif recPath[neighbor]:
            return True
    
    recPath[currNode] = False
    return False
    
    

def isDAG(graph):
    visited = {node:False for node in graph}
    recPath = {node: False for node in graph}

    for node in graph:
        if not visited[node]:
            if dfs(node,graph,visited,recPath):
                return False
    return True
        

@app.post('/pipelines/parse')
def parse_pipeline(data:PipelineRequest):
    nodes = data.nodes
    edges = data.edges
    graph = buildGraph(nodes,edges)
    return {'isDAG': isDAG(graph), 'nodes':data.nodes, 'edges':data.edges}
