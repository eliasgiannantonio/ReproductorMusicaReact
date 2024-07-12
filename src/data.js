import { v4 as uuidv4 } from "uuid";

function lofi() {
    return [
        {
            name: "Company",
            cover: "https://cms.chillhop.com/media/65763/squarel8f757904ef61a59fa3d564074e4834c1fb0af2e7.jpg",
            artist: "Leavy",
            audio:  "https://stream.chillhop.com/mp3/69950",
            color: ["#A79E6E", "#CDA87B"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Fade",
            cover: "https://cms.chillhop.com/media/698/squarel04d5dd66c33d8fc9137fd7b47f3b3c3a8e571761.jpg",
            artist: "Knowmadic",
            audio:  "https://stream.chillhop.com/mp3/8905",
            color: ["#1b3653", "#c45050"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Kauai",
            cover: "https://cms.chillhop.com/media/75411/squarelc0ed595aa9c8193aa208a3ee990bd332e89cda8a.jpg",
            artist: "Loyae",
            audio:  "https://stream.chillhop.com/mp3/74258",
            color: ["#dea549", "#bac7bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "First Snow",
            cover: "https://cms.chillhop.com/media/73726/squarel348f36853441467ba4a8b54a74b3c9c571b953d6.jpg",
            artist: "Enluv",
            audio:  "https://stream.chillhop.com/mp3/73636",
            color: ["#553c33", "#d3b48f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Berry Drive",
            cover: "https://cms.chillhop.com/media/37263/squarela4933e058391f06b10b6eceb01c437446a3d6c06.jpg",
            artist: "J.Folk",
            audio:  "https://stream.chillhop.com/mp3/41938",
            color: ["#c4b9a6", "#4c7994"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Empty place ",
            cover: "https://cms.chillhop.com/media/35941/squarel5158b15bf8cb3b9d50588cfc31d36d28c816dc0c.jpg",
            artist: "Psalm Trees",
            audio:  "https://stream.chillhop.com/mp3/35664",
            color: ["#6338b6", "#bf7cf2"],
            id: uuidv4(),
            active: false,
        },
    ]
}

export default lofi;