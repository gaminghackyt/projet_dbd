// === JSON complet adapté ===
const data = {
  "perks": [
    { "id": "agitation", "name": "Agitation", "icon": "image/PerkK/evan1.png", "description": "\n Augmente votre Vitesse de Mouvement de 6/12/18%.\n\n Augmente votre Rayon de Terreur de +12 mètres." },
    { "id": "force_brute", "name": "Force Brute", "icon": "image/PerkK/evan2.png", "description": "Détruire des Palettes et des Murs Destructibles, et endommager des Générateurs, est 10/15/20 % plus rapide." },
    { "id": "presence_pertubante", "name": "Présence Perturbante", "icon": "image/PerkK/evan3.png", "description": "Pour tous les Survivants en train de réparer ou de soigner dans votre Rayon de Terreur \n Les Tests d'Habileté ont 10 % de chance supplémentaire d'être générés. \n La zone de succès des Tests d'Habileté est réduite de 40/50/60 %." },
    { "id": "limier", "name": "Limier", "icon": "image/PerkK/philip1.png", "description": "Les Flaques de Sang brillent en rouge et peuvent être traquées pendant 2/3/4 secondes de plus que la normale." },
    { "id": "predateur", "name": "Prédateur", "icon": "image/PerkK/philip2.png", "description": "Lorsqu'un Survivant échappe à une Poursuite, son Aura est révélée pendant 4 secondes. \n Prédateur a un temps de recharge de 60/50/40 secondes." },
    { "id": "rejeton_de_l'ombre", "name": "Rejeton de l'Ombre", "icon": "image/PerkK/philip3.png", "description": "Augmente votre Champ de Vision de 6/8/10 %." },
    { "id": "rejeton_de_la_lumiere", "name": "Rejeton de la Lumière", "icon": "image/PerkK/max1.png", "description": "L'Aura des Survivants qui tentent de vous aveugler par n'importe quel moyen vous est révélée pendant 6/8/10 secondes. \n Accorde une immunité complète aux Aveuglements provoqués par les Lampes de Poche, les Pétards, les Grenades Aveuglantes, ou les Mines Explosives." },
    { "id": "reparateur", "name": "Réparateur", "icon": "image/PerkK/max2.png", "description": "Dès qu'un Générateur est réparé à 70 %, vous bénéficiez des effets suivants : \n Déclenche un Fort Bruit d'Alerte sur ce Générateur, révélant sa position. \n Octroie l'Effet de Statut Indétectable pendant 12/14/16 secondes." },
    { "id": "tenace", "name": "Tenace", "icon": "image/PerkK/max3.png", "description": "Vous êtes résistant à la douleur. La durée d'Étourdissement par Palette est réduite de 40/45/50 %. \n Tenace n'a aucun effet lors du transport d'un Survivant." }
  ],
  "killers": [
    { "id": "trapper", "name": "Le Piégeur", "power": { "id": "trapper_power", "name": "Piège à ours", "icon": "image/Power/trapper.png", "description": "Un grand piège à patte en acier. On trouve des pièges tout autour de la zone, prêts à être ramassés et installés n'importe où.", "color": "#946821"}, "addons": [ { "id": "trap1", "name": "Pièce Rouillée", "icon": "image/AddonsK/trapper1.png", "description": "Rend les pièges plus difficiles à désarmer.", "color": "#946821" }, { "id": "trap2", "name": "Griffe Brisée", "icon": "image/AddonsK/trapper2.png", "description": "Les survivants s'attrapent plus longtemps.", "color": "#555555" } ] },
    { "id": "wraith", "name": "Le Spectre", "power": { "id": "wraith_power", "name": "Cloche gémissante", "icon": "image/Power/wraith.png" }, "addons": [ { "id": "bell1", "name": "Cloche Fêlée", "icon": "image/Addons/bell1.png", "description": "Réduit le temps d'invisibilité.", "color": "#888888" } ] },
    { "id": "hillbilly", "name": "Le Cannibale", "power": { "id": "hillbilly_power", "name": "Tronçonneuse", "icon": "image/Power/hillbilly.png" }, "addons": [ { "id": "saw1", "name": "Essence Puissante", "icon": "image/Addons/saw1.png", "description": "Augmente la vitesse de démarrage.", "color": "#aa2222" } ] }
  ],
  "offerings": [
    { "id": "off1", "name": "Cocon vide", "icon": "image/OffrandeK/offrande1.png", "description": "\n Confère 25% de points de sang bonus dans toutes les catégories. \n\n << Une sorte de cocon, ouvert par la créature qui se trouvait à l'intérieur. >>", "color": "#2a8b46" },
    { "id": "off2", "name": "Pudding de survivant", "icon": "image/OffrandeK/offrande2.png", "description": "\n Accorde 100% de points de sang bonus dans toutes les catégories. \n\n Personnel. \n\n << Un pudding très salé... >>", "color": "#2a8b46" },
    { "id": "off3", "name": "Clafoutis glapissant", "icon": "image/OffrandeK/offrande3.png", "description": "\n Si vous écoutez de très très près, vous pouvez presque l'entendre pousser des hurlements à vous glacer le sang. \n\n Accorde un bonus de 108% aux points de sang dans toutes les catégories pour tous les joueurs de cette épreuve. \n Révèle l'aura des invitations dans un rayon de 16 mètres. \n Crée 1 coffre de plus. \n\n << Joyeux anniversaire ! Nous espérons que ce plat réconfortant ne vous causera pas trop... d'inconfort. >>", "color": "#d6a132" }
  ]
};

// === Sélection HTML ===
const step1 = document.getElementById("build-step-1");
const step2 = document.getElementById("build-step-2");
const buildTypeSelect = document.getElementById("build-type");
const randomKillerCheckbox = document.getElementById("random-killer");
const randomOfferingCheckbox = document.getElementById("random-offering");
const generateBtn = document.getElementById("generate-btn");

const buildContainer = document.getElementById("build-container");
const buildSummary = document.getElementById("build-summary"); 
const backBtn = document.getElementById("back-btn"); 

const powerSlot = document.getElementById("power-slot");
const addonSlot1 = document.getElementById("addon-slot-1");
const addonSlot2 = document.getElementById("addon-slot-2");
const offeringSlot = document.getElementById("offering-slot");
const perkSlots = document.querySelectorAll('.perk-slot');
const descriptionBox = document.querySelector('#perk-description');

// === Fonction pour formater description avec couleurs et sauts de ligne ===
function formatDescription(desc) {
  if (!desc) return "";

  let formatted = desc.replace(/\n/g, "<br>");

  // Trois nombres séparés par /
  formatted = formatted.replace(/(\d+)\/(\d+)\/(\d+)/g, (_, n1, n2, n3) => {
    return `<span style="color:#ffeb3b;">${n1}</span>/` +
           `<span style="color:#388e3c;">${n2}</span>/` +
           `<span style="color:#9c27b0;">${n3}</span>`;
  });

  // Deux nombres séparés par /
  formatted = formatted.replace(/(\d+)\/(\d+)/g, (_, n1, n2) => {
    return `<span style="color:#ffeb3b;">${n1}</span>/` +
           `<span style="color:#388e3c;">${n2}</span>`;
  });

  return formatted;
}

// === Étape 1 → 2 ===
document.getElementById("next-btn").addEventListener("click", () => {
  if (!buildTypeSelect.value) return alert("Choisis une catégorie de build !");
  step1.style.display = "none";
  step2.style.display = "block";
});

// === Retour à l’étape 1 ===
backBtn.addEventListener("click", () => {
  buildContainer.style.display = "none";
  step1.style.display = "block";
  step2.style.display = "none";
  descriptionBox.innerHTML = "";
  buildSummary.innerHTML = "";
});

// === Génération du build ===
generateBtn.addEventListener("click", () => {
  // Masquer les étapes de setup
  step1.style.display = "none";
  step2.style.display = "none";
  buildContainer.style.display = "block";

  // Rappel du choix
  buildSummary.innerHTML = `Vous avez choisi un <strong>Build ${buildTypeSelect.value}</strong>`;

  // Clear previous slots
  [powerSlot, addonSlot1, addonSlot2, offeringSlot, ...perkSlots].forEach(s => s.style.display = "none");
  descriptionBox.innerHTML = "";

  // ==== Killer ====
  let selectedKiller = null;
  if (randomKillerCheckbox.checked) {
    selectedKiller = data.killers[Math.floor(Math.random() * data.killers.length)];

    // Power
    powerSlot.style.backgroundImage = `url(${selectedKiller.power.icon})`;
    powerSlot.title = selectedKiller.power.name;
    powerSlot.style.display = "block";
    powerSlot.onclick = () => {
      descriptionBox.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="width:80px; height:80px; background-color:${selectedKiller.power.color || "#333"}; border:3px solid black; display:flex; align-items:center; justify-content:center;">
            <img src="${selectedKiller.power.icon}" style="max-width:60px; max-height:60px;">
          </div>
          <div>
            <strong>${selectedKiller.power.name}</strong>
            <p>${formatDescription(selectedKiller.power.description)}</p>
          </div>
        </div>
      `;
    };

    // Addons
    [addonSlot1, addonSlot2].forEach((slot, idx) => {
      if (selectedKiller.addons[idx]) {
        const addon = selectedKiller.addons[idx];
        slot.style.backgroundImage = `url(${addon.icon})`;
        slot.title = addon.name;
        slot.style.display = "block";
        slot.onclick = () => {
          descriptionBox.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:80px; height:80px; background-color:${addon.color}; border:3px solid black; display:flex; align-items:center; justify-content:center;">
                <img src="${addon.icon}" style="max-width:60px; max-height:60px;">
              </div>
              <div>
                <strong>${addon.name}</strong>
                <p>${formatDescription(addon.description)}</p>
              </div>
            </div>
          `;
        };
      }
    });
  }

  // ==== Offering ====
  if (randomOfferingCheckbox.checked) {
  const offering = data.offerings[Math.floor(Math.random() * data.offerings.length)];
  offeringSlot.style.backgroundImage = `url(${offering.icon})`;
  offeringSlot.title = offering.name;
  offeringSlot.style.display = "block";
  offeringSlot.onclick = () => {
    descriptionBox.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px;">
        <div style="
          width:100px; 
          height:100px; 
          background-color:${offering.color}; 
          border:3px solid black; 
          clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%);
          display:flex; 
          align-items:center; 
          justify-content:center;">
          <img src="${offering.icon}" style="max-width:70px; max-height:70px;">
        </div>
        <div>
          <strong>${offering.name}</strong>
          <p>${formatDescription(offering.description)}</p>
        </div>
      </div>
    `;
  };
}

  // ==== Perks ====
  let perksCopy = [...data.perks];
  let chosenPerks = [];
  for (let i = 0; i < 4 && perksCopy.length > 0; i++) {
    const rand = Math.floor(Math.random() * perksCopy.length);
    chosenPerks.push(perksCopy.splice(rand, 1)[0]);
  }

  perkSlots.forEach((slot, index) => {
    const perk = chosenPerks[index];
    if (perk) {
      slot.style.backgroundImage = `url(${perk.icon})`;
      slot.title = perk.name;
      slot.style.display = "block";
      slot.onclick = () => {
        descriptionBox.innerHTML = `
          <strong>${perk.name}</strong><br>
          <p>${formatDescription(perk.description)}</p>
        `;
      };
    }
  });
});