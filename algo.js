// Graph coloring
const graph = {
    "1":{
        connected_nodes:["2","3"]
    },
    "2":{
        connected_nodes:["1","4","5"]
    },
    "3":{
        connected_nodes:["1","4","6"]
    },
    "4":{
        connected_nodes:["2","3","6"]
    },
    "5":{
        connected_nodes:["2","6"]
    },
    "6":{
        connected_nodes:["3","4","5"]
    }
};

function colorGraph(graph){
    let next_nodes = [];
    let colored_nodes = new Set();
    let color_list = ["black","white"];
    
    next_nodes.push("5");
    colored_nodes.add("5");
    graph["5"].color = color_list[0];

    while(!(next_nodes.length == 0)){
        let node = next_nodes.shift();
        console.log(node);
        if(!(colored_nodes.has(node))){
            console.log("uncolored initial");
            graph[node].color = color_list[0];
            colored_nodes.add(node);
            console.log(colored_nodes);
        }
        graph[node].connected_nodes.forEach(n => {
            if(graph[node].color == color_list[0]){
                console.log("black node");
                if(!(colored_nodes.has(n))){
                    console.log("uncolored black child");
                    console.log(n);
                    graph[n].color = color_list[1];
                    next_nodes.push(n);
                    colored_nodes.add(n);
                    console.log(colored_nodes);
                } else {
                    console.log("colored black child");
                    if(graph[n].color == graph[node].color){
                        console.log("colored black child is black, change to white");
                        console.log(n);
                        graph[n].color = color_list[1];
                        next_nodes.push(n);
                    }
                }
            } else {
                console.log("white node");
                if(!(colored_nodes.has(n))){
                    console.log("uncolored white child, is black");
                    console.log(n);
                    graph[n].color = color_list[0];
                    next_nodes.unshift(n);
                    colored_nodes.add(n);
                } 
            }
            
        })
    }

    console.log(graph);
}

colorGraph(graph);