document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("phasmo-memo");
    const section = document.querySelector("section");

    const maps = [
      {
        name: "Tanglewood Drive",
        maison: ["https://preview.redd.it/photoshoot-featuring-tanglewood-street-house-v0-e95w1moylmt81.jpg?width=1080&crop=smart&auto=webp&s=49621d176186753a289d540af5c8b11132febcb7"],
        decoupe: ["https://www.phasmophobia-fr.com/wp-content/uploads/2021/07/Tanglewood.png"]
      },
      {
        name: "Edgefield Road",
        maison: ["https://oyster.ignimgs.com/mediawiki/apis.ign.com/phasmophobia/7/77/Edgefield_Hjouse.png?width=640"],
        decoupe: [
            "https://www.phasmophobia-fr.com/wp-content/uploads/2022/10/Edgefield-RDC.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2022/10/Edgefield-1-2.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2022/10/Edgefield-1-1.png"
        ]
      },
      {
        name: "Ridgeview Court",
        maison: ["https://images.steamusercontent.com/ugc/1651097965841117693/564FABEF7E67C29866DEF98451AD3B3CB356CD12/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"],
        decoupe: [
            "https://www.phasmophobia-fr.com/wp-content/uploads/2022/12/Ridgeview-RDC.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2022/12/Ridgeview-1.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2022/12/Ridgeview-1-1.png"
        ]
      },
      {
        name: "Grafton Farmhouse",
        maison: ["https://s3.phasmophobia.su/knowledge-base/maps/grafton-farmhouse.webp"],
        decoupe: [
            "https://www.phasmophobia-fr.com/wp-content/uploads/2022/11/Grafton-rdc.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2022/11/Grafton-etage.png"
        ]
      },
      {
        name: "Bleasdale Farmhouse Rework",
        maison: ["https://www.vice.com/wp-content/uploads/sites/2/2025/03/Bleasdale-Farmhouse-Rework-Phasmophobia.jpg?w=1024"],
        decoupe: ["Bleasdale_Farmhouse_-_Floorplan.png"]
      },
      {
        name: "Willow Street",
        maison: ["https://images.steamusercontent.com/ugc/1866206274381145775/963089188132A8B989B235ACBABA3F2DF91E60A6/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"],
        decoupe: [
            "https://www.phasmophobia-fr.com/wp-content/uploads/2021/07/Willow-rdc-252x300.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2021/07/Willow-ss.png"
        ]
      },
      {
        name: "Point Hope",
        maison: ["https://dotesports.com/wp-content/uploads/2024/06/phasmophobia-point-hope-lighthouse-outside.jpg?quality=75&w=1200"],
        decoupe: [
            "https://www.phasmophobia-fr.com/wp-content/uploads/2024/10/Point-Hope-0.jpg",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2024/10/Point-Hope-1.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2024/10/Point-Hope-2.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2024/10/Point-Hope-3.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2024/10/Point-Hope-4.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2024/10/Point-Hope-5.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2024/10/Point-Hope-6.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2024/10/Point-Hope-7.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2024/10/Point-Hope-8.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2024/10/Point-Hope-9.png"
        ]
      },
      {
        name: "Camp Woodwind",
        maison: ["https://s3.phasmophobia.su/knowledge-base/maps/camp-woodwind.webp"],
        decoupe: ["https://www.phasmophobia-fr.com/wp-content/uploads/2023/01/Woodwind.png"]
      },
      {
        name: "Sunny Meadows Restricted",
        maison: ["https://www.gamepur.com/wp-content/uploads/2022/09/27081313/Sunny-Meadows-Phasmophobia.jpg?w=1200"],
        decoupe: [
            "https://www.phasmophobia-fr.com/wp-content/uploads/elementor/thumbs/Sunny-Meadows-zone-centrale-revamp-q4d59u1zjy46uvavfydd3dwyrzkintx783y3mqowwe.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2023/01/Sunny-Meadows-Upstairs-Left-Male-wing.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2023/01/Sunny-Meadows-basement-zone-centrale.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2023/01/Sunny-Meadows-basement-right-Restricted-Area.png"
        ]
      },
      {
        name: "Prison",
        maison: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVm0RSDJEd4c94Re5r8m6JrNMO5cDhTBw-4w&s"],
        decoupe: [
            "https://www.phasmophobia-fr.com/wp-content/uploads/2021/07/Prison-etage.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2021/07/Prison-rdc.png"
        ]
      },
      {
        name: "Maple Lodge Campsite",
        maison: ["https://s3.phasmophobia.su/knowledge-base/maps/maple-lodge-campsite.webp"],
        decoupe: [
            "https://www.phasmophobia-fr.com/wp-content/uploads/2023/10/Maple-exterieur-NEW-1.jpg",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2022/12/Maple-rdc.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2022/12/Maple-etage.png"
        ]
      },
      {
        name: "Brownstone High School",
        maison: ["https://dotesports.com/wp-content/uploads/2025/01/phasmophobia-brownstone-high-school-entrance.jpg"],
        decoupe: [
            "https://www.phasmophobia-fr.com/wp-content/uploads/2021/07/high-school-etage-1.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2021/07/high-school-rdc.png"
        ]
      },
      {
        name: "Sunny Meadows",
        maison: ["https://www.gamepur.com/wp-content/uploads/2022/09/27081313/Sunny-Meadows-Phasmophobia.jpg?w=1200"],
        decoupe: [
            "https://www.phasmophobia-fr.com/wp-content/uploads/elementor/thumbs/Sunny-Meadows-zone-centrale-revamp-q4d59u1zjy46uvavfydd3dwyrzkintx783y3mqowwe.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2023/01/Sunny-Meadows-Upstairs-Left-Male-wing.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2023/01/Sunny-Meadows-Upstairs-Right-Female-wing.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2023/01/Sunny-Meadows-basement-zone-centrale.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2023/01/Sunny-Meadows-basement-left-Hospital-Wing.png",
            "https://www.phasmophobia-fr.com/wp-content/uploads/2023/01/Sunny-Meadows-basement-right-Restricted-Area.png"
        ]
      }
    ];

    function fadeOut(element, duration = 300) {
      return new Promise((resolve) => {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = 0;
        setTimeout(() => resolve(), duration);
      });
    }

    function fadeIn(element, duration = 300) {
      return new Promise((resolve) => {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = 1;
        setTimeout(() => resolve(), duration);
      });
    }

    function showMapDetails(map) {
        const details = document.getElementById("map-details");
        details.innerHTML = "";
      
        const title = document.createElement("h3");
        title.textContent = map.name;
        title.style.color = "white";
        title.style.fontSize = "2rem";
        details.appendChild(title);
      
        for (const [key, value] of Object.entries(map)) {
          if (key === "name") continue; // On saute le nom puisqu'il est déjà affiché
      
          const block = document.createElement("div");
          block.style.marginTop = "20px";
      
          const title = document.createElement("h4");
          title.textContent = key.charAt(0).toUpperCase() + key.slice(1);
          title.style.color = "#ff0000";
          title.style.fontSize = "1.5rem";
          title.style.marginTop = "4%";
          block.appendChild(title);
      
          value.forEach((url) => {
            const img = document.createElement("img");
            img.src = url;
            img.style.maxWidth = "100%";
            img.style.border = "2px solid #36ff00";
            img.style.margin = "5px";
            block.appendChild(img);
          });
      
          details.appendChild(block);
        }
      }

    button.addEventListener("click", async () => {
      await fadeOut(section);

      section.innerHTML = "";
      section.style.opacity = 0;

      const container = document.createElement("div");
      container.style.display = "flex";
      container.style.flexWrap = "wrap";
      container.style.gap = "20px";
      section.appendChild(container);

      maps.forEach((map, index) => {
        const mapBtn = document.createElement("button");
        mapBtn.textContent = `${index + 1}. ${map.name}`;
        mapBtn.style.fontFamily = "'Orbitron', sans-serif";
        mapBtn.style.fontSize = "1.3rem";
        mapBtn.style.color = "#7FFFD4";
        mapBtn.style.background = "#111";
        mapBtn.style.padding = "10px";
        mapBtn.style.margin = "5px";
        mapBtn.style.borderRadius = "5px";
        mapBtn.style.cursor = "pointer";

        mapBtn.addEventListener("click", () => showMapDetails(map));

        container.appendChild(mapBtn);
      });

      const details = document.createElement("div");
      details.id = "map-details";
      details.style.marginTop = "20px";
      section.appendChild(details);

      await fadeIn(section);
    });
  });