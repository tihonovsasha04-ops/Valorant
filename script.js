const agents = {
    phoenix: [
        {
            level: "BASIC",
            effect: "Curveball",
            desc: "Throw a curved flare orb that blinds enemies.",
            img: "images/phoenix-abilitys-1.svg"
        },
        {
            level: "BASIC",
            effect: "Hot Hands",
            desc: "Throw a fireball that damages enemies.",
            img: "images/phoenix-abilitys-2.svg"
        },
        {
            level: "SIGNATURE",
            effect: "Blaze",
            desc: "Create a wall of fire that blocks vision.",
            img: "images/phoenix-abilitys-3.svg"
        },
        {
            level: "ULTIMATE",
            effect: "Run It Back",
            desc: "Mark your location and respawn after death.",
            img: "images/phoenix-abilitys-4.svg"
        }
    ],

    jett: [
        {
            level: "BASIC",
            effect: "Cloudburst",
            desc: "Throw a smoke cloud that blocks vision.",
            img: "images/jett-abilitys-1.svg"
        },
        {
            level: "BASIC",
            effect: "Updraft",
            desc: "Launch yourself high into the air.",
            img: "images/jett-abilitys-2.svg"
        },
        {
            level: "SIGNATURE",
            effect: "Tailwind",
            desc: "Dash a short distance instantly.",
            img: "images/jett-abilitys-3.svg"
        },
        {
            level: "ULTIMATE",
            effect: "Blade Storm",
            desc: "Throw deadly accurate knives.",
            img: "images/jett-abilitys-4.svg"
        }
    ],

    sova: [
        {
            level: "BASIC",
            effect: "Shock Bolt",
            desc: "Fire an explosive bolt.",
            img: "images/sova-abilitys-1.svg"
        },
        {
            level: "BASIC",
            effect: "Owl Drone",
            desc: "Control a scouting drone.",
            img: "images/sova-abilitys-2.svg"
        },
        {
            level: "SIGNATURE",
            effect: "Recon Bolt",
            desc: "Reveal nearby enemies.",
            img: "images/sova-abilitys-3.svg"
        },
        {
            level: "ULTIMATE",
            effect: "Hunter's Fury",
            desc: "Fire deadly energy blasts across the map.",
            img: "images/sova-abilitys-4.svg"
        }
    ],

    sage: [
        {
            level: "BASIC",
            effect: "Slow Orb",
            desc: "Create a slowing field.",
            img: "images/sage-abilitys-1.svg"
        },
        {
            level: "SIGNATURE",
            effect: "Healing Orb",
            desc: "Heal yourself or allies.",
            img: "images/sage-abilitys-2.svg"
        },
        {
            level: "BASIC",
            effect: "Barrier Orb",
            desc: "Create a solid wall.",
            img: "images/sage-abilitys-3.svg"
        },
        {
            level: "ULTIMATE",
            effect: "Resurrection",
            desc: "Revive a dead teammate.",
            img: "images/sage-abilitys-4.svg"
        }
    ]
};

const characters = document.querySelectorAll(".character");

characters.forEach(character => {
    character.addEventListener("click", () => {

        const agent = character.dataset.agent;

        const abilities = agents[agent];

        abilities.forEach((ability, index) => {

            document.getElementById(`level${index + 1}`).textContent = ability.level;

            document.getElementById(`effect${index + 1}`).textContent = ability.effect;

            document.getElementById(`desc${index + 1}`).textContent = ability.desc;

            document.getElementById(`img${index + 1}`).src = ability.img;

        });

    });
});