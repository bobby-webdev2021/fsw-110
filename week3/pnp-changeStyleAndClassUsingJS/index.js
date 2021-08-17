for (let i = 0; i < 5; i ++) {
        const ele = document.createElement("h1");
        ele.innerText = "Learn to style with Javascript and pull class from css";
        document.body.appendChild(ele).style.fontFamily = "sans-serif";
        document.body.appendChild(ele).style.color = "cornflowerblue";
        document.body.appendChild(ele).style.fontWeight = "lighter";
        document.body.appendChild(ele).style.fontSize = "20px";
        ele.classList.add("border");  
    }