document.addEventListener("DOMContentLoaded", () => {
    let currentPage = 0;

    // Données des pages (remplace avec toutes tes pages)
    const pages = [
        {
            name: "Dwight Fairfield",
            image: "img/Dwight.png",
            perks: [
                { img: "../perk roulette/images/dwight1.png", name: "Fais tes Preuves", link: "https://deadbydaylight.fandom.com/fr/wiki/Fais_tes_Preuves" },
                { img: "../perk roulette/images/dwight2.png", name: "Lien", link: "https://deadbydaylight.fandom.com/fr/wiki/Lien" },
                { img: "../perk roulette/images/dwight3.png", name: "Meneur", link: "https://deadbydaylight.fandom.com/fr/wiki/Meneur" }
            ],
            lore: `Dwight a été un élève chétif et débile durant toutes ses années de lycée. Il voulait toujours faire partie des gamins cool mais manquait de charisme. Il tenta d'intégrer l'équipe de football américain mais fut rejeté, celle de basketball ne prit même pas en compte sa candidature et ses notes étaient bien en-dessous de la moyenne. Un week-end, lors d'un exercice de cohésion d'équipe à son travail minable, le patron de Dwight les emmena au plus profond des bois avant de leur divulguer sa recette de famille pour l'alcool de contrebande. Dwight se souvint avoir bu la première gorgée avant de se réveiller tard le lendemain matin, tout seul. Durant la nuit, les autres l'avaient abandonné. Une fois de plus risée de la communauté, Dwight tenta de cheminer hors des bois. C'est la dernière fois que l'on entendit parler de Dwight Fairfield.

                    Dwight n'est pas le gars typique auquel vous pensez quand on vous parle de "Survivant". Il lui manque ce petit piquant et sans ses lunettes, il est plus ou moins aveugle. Mais alors que le soleil se couche et que les bois s'animent, Dwight s'accroche à sa vie de rat de course, s'assurant qu'il vivra pour voir un autre jour même si quelque chose d'inimaginable est après lui. Dwight ne s'arrêtera pas. Il survivra quoi qu'il arrive. Alors que d'autres passaient des heures à se montrer au lycée, il passait des heures à devenir invisible et à éviter le danger. Et peu importe que les dangers se trouvent dans un couloir ou dans les bois. Survivre est la clé. Alors que d'autres employés paniquent lorsque la terreur les envahit, Dwight utilise son expérience troublante d'adolescent. La roue a désormais tourné, et d'autres doivent maintenant suivre les instructions fermes de Dwight s'ils veulent survivre, car il sait comment disparaître.`
        },
        {
            name: "Meg Thomas",
            image: "img/Meg.png",
            perks: [
                { img: "../perk roulette/images/meg1.png", name: "Adrénaline", link: "https://deadbydaylight.fandom.com/fr/wiki/Adrénaline" },
                { img: "../perk roulette/images/meg2.png", name: "Course Effrénée", link: "https://deadbydaylight.fandom.com/fr/wiki/Course_Effrénée" },
                { img: "../perk roulette/images/meg3.png", name: "Rapide et Silencieux", link: "https://deadbydaylight.fandom.com/fr/wiki/Rapide_et_Silencieux" }
            ],
            lore: `Son tempérament acharné lui vient peut-être de sa mère, ou alors du fait que son père les a abandonnées quand elle n'était qu'un bébé. Meg était une élève brillante mais elle avait un grain. Heureusement, un entraîneur en athlétisme l'encouragea à canaliser son énergie sur la piste. Elle se motiva pour devenir une vedette du lycée et gagna une bourse pour l'université. Quand sa mère tomba malade, Meg décida d'abandonner sa chance d'entrer à l'université pour s'occuper de la femme qui l'avait élevée. Par une journée estivale, lors d'une longue course dans les bois, Meg disparut. Ils eurent beau chercher, ils ne retrouvèrent jamais son corps.

                    Meg est de celles qui sont tout simplement remplies d'énergie. Une énergie non focalisée et incontrôlable qui devait sortir. Enfant, elle se manifestait par de l'agitation et de la rébellion. Quelqu'un devait canaliser Meg avant que quelque chose ne tourne mal. Heureusement, quelqu'un l'a fait. Elle a commencé à fuir. Peut-être de quelque chose d'indéfini qui alimentait son énergie. Courir était donc synonyme de vie. Mais courir maintenant pourrait attirer ces êtres qui ont soif de la douleur des autres. Mais alors qu'elle fuit quelque chose, au lieu d'y aller, elle comprend quelque chose. Elle comprend que la vitesse n'est pas l'essentiel. C'est d'atteindre la ligne d'arrivée. Plutôt dernier mais respirant encore. Elle se fait des illusions sur ce qui se trouve dehors en glissant à travers les obstacles et la peur, parvenant ainsi à rester en vie.`
        },
        {
            name: "Claudette Morel",
            image: "img/Claudette.png",
            perks: [
                { img: "../perk roulette/images/claudette1.png", name: "Auto-Traitement", link: "https://deadbydaylight.fandom.com/fr/wiki/Auto-Traitement" },
                { img: "../perk roulette/images/claudette2.png", name: "Connaissances en Botanique", link: "https://deadbydaylight.fandom.com/fr/wiki/Connaissances_en_Botanique" },
                { img: "../perk roulette/images/claudette3.png", name: "Empathie", link: "https://deadbydaylight.fandom.com/fr/wiki/Empathie" }
            ],
            lore: `À partir du jour où Claudette reçut son premier kit de sciences de ses parents, elle adora expérimenter. Sa quête obsessionnelle lui fit intégrer très jeune une université renommée. Quitter Montréal fut une décision importante, mais l'occasion était trop belle pour la laisser passer.

                    Sa nature introvertie fait que les chats et forums sont pour elle le moyen idéal d'avoir une vie sociale. Sa nouvelle activité favorite est de répondre à des questions de botanique sous son dernier pseudonyme de La Scientifique.

                    Un soir, au cours d'un long trajet en bus, Claudette fit une ballade qui allait changer sa vie. En une minute seulement, elle se retrouva complètement perdue dans une forêt épaisse. Elle ne retrouva jamais son chemin. Les gens du forum ne commencèrent à se demander où elle était passée qu'une semaine après qu'elle ait arrêté d'interagir.

                    Claudette n'est pas du genre à sortir. Son génie lui a procuré un handicap social et elle a fui le monde réel pour les salons de discussion et les forums. La botanique et les études remplissent sa vie et même si elle aspire à autre chose - rien ne viendra via un modem. Être jeté dans une situation réelle peut sembler gênant et forcé. Mais comme elle est habituée à se fermer du monde, elle retrouve soudain l'espoir dans cette obscurité inexplicable qui la dévore peu à peu. Une plante. Un arbre. Un buisson. De la verdure simple qui pourrait sauver une vie. Elle se cache en eux et parmi eux. Ses connaissances et ses compétences s'épanouissent alors que l'horreur erre librement autour d'elle.`
        },
        {
            name: "Jake Park",
            image: "img/Jake.png",
            perks: [
                { img: "../perk roulette/images/jake1.png", name: "Esprit Calme", link: "https://deadbydaylight.fandom.com/fr/wiki/Esprit_Calme" },
                { img: "../perk roulette/images/jake2.png", name: "Saboteur", link: "https://deadbydaylight.fandom.com/fr/wiki/Saboteur" },
                { img: "../perk roulette/images/jake3.png", name: "Volonté de Fer", link: "https://deadbydaylight.fandom.com/fr/wiki/Volont%C3%A9_de_Fer" }
            ],
            lore: `Grandir en étant le fils d'un grand PDG a toujours fait peser un poids sur Jake Park. Quand son frère fut diplômé de Yale avec mention, la pression sur Jake s'accentua. En fait, il n'était pas fait pour les études, mais son père ne comprit jamais vraiment son refus d'accepter l'éducation coûteuse qu'il lui offrait. Finalement, Jake se rebella en arrêtant complètement l'école.

                    Aujourd'hui, il vit en marge, à la lisière des bois. Il n'a pas parlé à son père depuis des années mais sa mère prend de ses nouvelles de temps en temps. C'est elle qui finit par appeler la police.

                    Les flics dirent qu'il s'était perdu dans les bois et un groupe les fouilla pendant des jours, mais les recherches durent s'arrêter en raison du mauvais temps. Malgré les demandes insistantes de sa mère, elles ne reprirent jamais et Jake devint une autre victime des bois.

                    Le destin de Jake était fixé même dans le ventre de sa mère. Héritier de la fortune, des manières nobles et gardien de la réputation et de l'héritage de la famille. Pendant la torture ce n'est pas la douleur qui brise un homme, c'est une pression immense. Et Jake ne pouvait plus supporter autant de pression. Au lieu de cela, il cherchait l'opposé de la gastronomie et des femmes de chambre. Il quitta le repaire, et finit par avoir une forêt en tant que plus proche voisine. Un outsider autodidacte, Jake comprend la nature. Il n'est pas là pour apprivoiser quelque chose - plutôt pour que lui devienne sauvage. Supprimez les Tueurs brutaux qui cherchent à drainer du sang, et Jake se sentirait comme chez lui. Pas de Wi-Fi. Pas la fortune de 500 entreprises. Ni père, ni mère. Des années loin de la vie moderne donnèrent à Jake une nouvelle approche des problèmes. La douleur n'est qu'un obstacle qui vous empêche de vous nourrir. Peu importe ce qui vous chasse, vous devez garder une longueur d'avance. Se battre, se fondre dans l'environnement, s'adapter. Ne laissez pas les autres de vous effacer si facilement de la surface de la Terre.`
        }
    ];

    function updateBook() {
        const bookContainer = document.querySelector(".book-container");
    
        // Ajoute une classe pour l'effet de fondu
        bookContainer.classList.add("fade-out");
    
        setTimeout(() => {
            let pageData = pages[currentPage];
    
            document.querySelector(".survivor-name a").textContent = pageData.name;
            document.querySelector(".survivor-name a").href = `https://deadbydaylight.fandom.com/fr/wiki/${pageData.name.replace(" ", "_")}`;
            document.querySelector(".survivor-image").src = pageData.image;
    
            let perkList = document.querySelector(".perk-list");
            perkList.innerHTML = "";
            pageData.perks.forEach(perk => {
                let li = document.createElement("li");
                li.innerHTML = `<img src="${perk.img}" class="perk"><a href="${perk.link}" class="lien" target="_blank">${perk.name}</a>`;
                perkList.appendChild(li);
            });
    
            document.querySelector(".lore-text").innerHTML = pageData.lore.replace(/\n/g, "<br>");
    
            // Retire l'effet de fondu après le changement de page
            bookContainer.classList.remove("fade-out");
        }, 300);
    }

    document.body.addEventListener("click", (event) => {
        const clickX = event.clientX;
        const screenWidth = window.innerWidth;

        if (clickX < screenWidth * 0.4) {
            if (currentPage > 0) {
                currentPage--;
                updateBook();
            }
        } else if (clickX > screenWidth * 0.6) {
            if (currentPage < pages.length - 1) {
                currentPage++;
                updateBook();
            }
        }
    });
    updateBook();
});