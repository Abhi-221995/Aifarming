import { createContext, useState } from "react";

export const PlantContext = createContext();

export const PlantProvider = ({ children }) => {
    const plantdata = [
        {
            id: 1,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/carrot.png",
            Name: "Carrot",
            seasons: "Spring, Summer, Fall, Winter",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "90 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 2,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/cabbage.png",
            Name: "Cabbage",
            seasons: "Spring, Summer, Fall, Winter",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "75 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 3,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/lettuce.png",
            Name: "Lettuce",
            seasons: "Spring, Summer, Fall, Winter",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "75 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 4,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/tomato.png",
            Name: "Tomato",
            seasons: "Summer",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "80 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 5,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/spinach.png",
            Name: "Spinach",
            seasons: "Spring",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "55 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 6,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/arugula.png",
            Name: "Arugula",
            seasons: "Spring, Fall",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "45 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 7,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/savory-1.png",
            Name: "Savory",
            seasons: "Spring, Summer, Fall, Winter",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "75 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 8,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/garlic.png",
            Name: "Garlic",
            seasons: "Spring, Summer, Fall",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "210 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 9,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/bush.png",
            Name: "Bush Beans",
            seasons: "Summer",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "50 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 10,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/Sweet-Pepper.png",
            Name: "Sweet Pepper",
            seasons: "Spring, Summer, Fall, Winter",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "79 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 11,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/corn.png",
            Name: "Corn",
            seasons: "Spring, Summer",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "89 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
        {
            id: 12,
            image: "https://aifarming.ca/wp-content/uploads/2023/08/lime.png",
            Name: "Lime",
            seasons: "Spring, Summer, Fall, Winter",
            planttype: "-",
            suntime: "Full Sun",
            numofDays: "255 Days",
            watering: "Moderate",
            avoid: "Celery, Dill, Parsnips",
            suppPlants: "Cabbage, Chives, Lettuce, Bush Beans, Green Beans, Pole Beans",
            seed: {
                seedDepth: "6-13",
                daysToGermination: "6 Days",
                outdoorSowing: "Spring to summer",
                soilTemp: "75F",
                indoorSowing: "Not Recommended",
                sowingInstruction: "Early autumn is the best month to plant carrot seeds. Find a soft ground to sow the seeds. Pour a small glass of water between all of the seeds without washing away the dirt (This step should be performed every day)."
            },
            growing:{
                spacbtwBeds: "5cm",
                phRange:"5.5-6.5",
                soilTemp:"60F-70F",
                growingInstruction:"The seeds will start to sprout in couple of weeks. When watering the seeds make sure to avoid getting the leaves wet. The wetting of leaves can result in burning holes into the leaves from the sun."
            },
            harvesting:{
                daysToHarvest:"90 Days",
                daysToSeedilings:"70 Days",
                harvestingInstructions:"Harvest the carrots when bit that sticks out of the ground is the diameter of a quarter. Dig them up carefully so as not to damage the root."
            }

        },
    ];
    const [selectedPlant, setSelectedPlant] = useState(null);
    const blogdata =[
        {
            id:1,
            date:"April 20, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/04/7.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"AI in Agriculture: The Future of Farming in Canada",
            blogdesc:"Whether you’re growing tender looseleaf Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff... or full-headed romaine and butterhead types, harvesting lettuce at the right...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."

        },
        {
            id:2,
            date:"March 13, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/03/The-Future-of-Urban-Farming-AI-Based-Full-Cycle-Plant-Management-Systems.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"The Future of Urban Farming: AI-Based Full-Cycle Plant Management Systems",
            blogdesc:"Urban farming is rapidly evolving, and with the rise of artificial intelligence (AI), managing crops in city...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."

        },
        {
            id:3,
            date:"February 27, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/02/How-to-Grow-Fresh-Produce-in-Small-Spaces-1.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"How to Grow Fresh Produce in Small Spaces",
            blogdesc:"Living in an urban environment often means limited outdoor space, but that doesn’t mean you can’t grow...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."

        },
        {
            id:4,
            date:"February 22, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/02/Rooftop-Gardening-in-Canada_-Turning-Unused-Spaces-into-Green-Oases-1.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"Rooftop Gardening in Canada: Turning Unused Spaces into Green Oases",
            blogdesc:"As Canadian cities continue to expand, so do concerns about limited green spaces, environmental sustainability, and food...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."
        },
        {
            id:5,
            date:"April 20, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/02/The-Rise-of-Urban-Gardening-in-Canada-1024x536.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"AI in Agriculture: The Future of Farming in Canada",
            blogdesc:"Whether you’re growing tender looseleaf Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff... or full-headed romaine and butterhead types, harvesting lettuce at the right...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."

        },
        {
            id:6,
            date:"March 13, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/02/Best-Plant-Management-Systems-for-Urban-Farmers-in-Canada-1-1024x536.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"The Future of Urban Farming: AI-Based Full-Cycle Plant Management Systems",
            blogdesc:"Urban farming is rapidly evolving, and with the rise of artificial intelligence (AI), managing crops in city...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."

        },
        {
            id:7,
            date:"February 27, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/01/Hoya-Pubicalyx-1-1024x536.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"AI in Agriculture: The Future of Farming in Canada",
            blogdesc:"Whether you’re growing tender looseleaf Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff... or full-headed romaine and butterhead types, harvesting lettuce at the right...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."

        },
        {
            id:8,
            date:"February 22, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/02/Rooftop-Gardening-in-Canada_-Turning-Unused-Spaces-into-Green-Oases-1.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"AI in Agriculture: The Future of Farming in Canada",
            blogdesc:"Whether you’re growing tender looseleaf Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff... or full-headed romaine and butterhead types, harvesting lettuce at the right...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."
        },
        {
            id:9,
            date:"April 20, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/04/7.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"AI in Agriculture: The Future of Farming in Canada",
            blogdesc:"Whether you’re growing tender looseleaf Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff... or full-headed romaine and butterhead types, harvesting lettuce at the right...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."

        },
        {
            id:10,
            date:"March 13, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/03/The-Future-of-Urban-Farming-AI-Based-Full-Cycle-Plant-Management-Systems.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"The Future of Urban Farming: AI-Based Full-Cycle Plant Management Systems",
            blogdesc:"Urban farming is rapidly evolving, and with the rise of artificial intelligence (AI), managing crops in city...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."

        },
        {
            id:11,
            date:"February 27, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/02/How-to-Grow-Fresh-Produce-in-Small-Spaces-1.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"AI in Agriculture: The Future of Farming in Canada",
            blogdesc:"Whether you’re growing tender looseleaf Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff... or full-headed romaine and butterhead types, harvesting lettuce at the right...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."

        },
        {
            id:12,
            date:"February 22, 2025",
            blogimg1:"https://aifarming.ca/wp-content/uploads/2025/02/Rooftop-Gardening-in-Canada_-Turning-Unused-Spaces-into-Green-Oases-1.jpg",
            blogimg2:"https://aifarming.ca/wp-content/uploads/2025/04/8.jpg",
            blogheading1:"AI in Agriculture: The Future of Farming in Canada",
            blogdesc:"Whether you’re growing tender looseleaf Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff... or full-headed romaine and butterhead types, harvesting lettuce at the right...",
            blogindesc1:"Artificial intelligence (AI) is steadily transforming how food is grown and produced. What was once the stuff of science fiction – self-driving tractors, sensor-studded fields, predictive algorithms guiding farm decisions – is now becoming reality on Canadian farms.",
            bloginheading2:"Benefits of AI-Powered Farming: A Greener, Smarter Future",
            blogindesc2:"Higher Yields and Greater Efficiency: Perhaps the most immediate draw is the potential for increased crop yields and more efficient use of inputs. By making farming decisions hyper-specific to each plant or animal’s needs, AI minimizes waste and maximizes output. For example, AI systems that analyze sensor data can ensure fertilizer and water are applied at the optimal rate, avoiding overuse and ensuring crops aren’t undernourished. One analysis suggests that AI-driven precision agriculture could boost yields by around 20% in some cases. At the Nature Fresh greenhouse in Ontario, adopting AI controls has already led to yield improvements in vegetable crops while using less energy and water. On dairy farms, AI-driven health monitoring can lead to longer-living, more productive cows by catching illnesses early and improving breeding decisions, thereby increasing milk output. All of these gains contribute to a more productive farm sector that can produce more food on the same amount of land."
        }
          
    ];

    const [selectedBlog, setselectedBlog] = useState(null)
    return (
        <PlantContext.Provider value={{ plantdata, selectedPlant, setSelectedPlant, blogdata, selectedBlog, setselectedBlog }}>
            {children}
        </PlantContext.Provider>
    );
};