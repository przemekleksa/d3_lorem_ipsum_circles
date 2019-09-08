import React, { useState, useEffect } from 'react';
import './App.css';
import * as d3 from 'd3';


export default function App () {
  const [count, setCount] = useState([1]);
  useEffect(() => {
     document.title =`${count.length-1}`;
  })

  return (
    <div className="app">
        <div className="buttons">
          <button
              onClick={() => {
                setCount([...count, 1]);
                let circle = d3.select(".circles").selectAll("svg").data(count).enter().append("svg").attr("width", "200").attr("height", "200").append("g");

                circle.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 100).style("fill", "#03a9fc");

                circle.append("text").attr("x", "50%").attr("y", "50%").attr("font-size", "25px").attr("text-anchor", "middle").text("Lorem Ipsum").style("font-family", "Lobster");
              }}
              >
              Dodaj nowe kółko
          </button>
          <button
              onClick={() => {
                if (count.length > 1) {
                  setCount(count.splice(0, count.length-1));
                };
                
                d3.select("svg").remove();
              }}
          >
              Usuń ostatnie kółko
          </button>
        </div>
        <div className="circles">
              
        </div>
        
    </div>
  )

}