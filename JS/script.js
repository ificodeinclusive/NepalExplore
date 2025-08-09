const destinations = [
    {
        Place: "Pokhara",
        Budget: "Medium",
        Best_Season: "All",
        Setting: "Urban",
        Activities: "Paragliding, Boating, Hiking",
        Image_URL: "https://mysticadventureholidays.com/_next/image?url=https%3A%2F%2Fmedia.app.mysticadventureholidays.com%2Fuploads%2Ffullbanner%2Fpokhara-socoal.webp&w=3840&q=75",
        Description: "Pokhara is a beautiful city surrounded by the Annapurna mountains and blessed with the tranquil Phewa Lake. It is the perfect place for both adventure and relaxation, offering paragliding over scenic valleys, peaceful boat rides, and hikes to viewpoints like Sarangkot. The lakeside area is lively with cafés, shops, and stunning views that can be enjoyed throughout the year."
    },
    {
        Place: "Lumbini",
        Budget: "Low",
        Best_Season: "Spring",
        Setting: "Urban",
        Activities: "Monastery Visits, Meditation",
        Image_URL: "https://lumbinidevtrust.gov.np/upload_file/images/slider/1721894939_276597348_lumbini.jpg",
        Description: "Lumbini is the birthplace of Lord Buddha and a peaceful place filled with monasteries, gardens, and historical sites. Visitors can explore temples built by different countries, meditate in quiet surroundings, and learn about the life of Buddha. The calm atmosphere makes it a perfect spot for spiritual reflection, especially in spring."
    },
    {
        Place: "Mustang",
        Budget: "High",
        Best_Season: "All",
        Setting: "Rural",
        Activities: "Trekking, Jeep Safari",
        Image_URL: "https://www.himalayanascent.com/wp-content/uploads/2019/02/untitled-40.jpg",
        Description: "Mustang is a remote and fascinating region known as the “Forbidden Kingdom.” It offers a mix of dramatic landscapes, colorful cliffs, and Tibetan-inspired culture. Visitors can trek through ancient villages, explore mysterious caves, and enjoy jeep safaris that reveal the area’s raw beauty."
    },
    {
        Place: "Chitwan",
        Budget: "Medium",
        Best_Season: "Autumn",
        Setting: "Urban",
        Activities: "Jungle Safari, Canoeing",
        Image_URL: "https://www.andbeyond.com/wp-content/uploads/sites/5/indian-elephant-chitwan-nepal.jpg",
        Description: "Chitwan is famous for its national park, which is home to rhinos, tigers, elephants, and many rare birds. Visitors can go on exciting jungle safaris, take canoe rides on the Rapti River, and experience the unique culture of the Tharu people. Autumn is the best time to enjoy its pleasant weather and rich wildlife."
    },
    {
        Place: "Ilam",
        Budget: "Low",
        Best_Season: "Winter",
        Setting: "Urban",
        Activities: "Tea Garden Walks, Photography",
        Image_URL: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2021/money/kanyamweb-1624287001.jpg&w=900&height=601",
        Description: "Ilam is a peaceful hill town covered in green tea gardens and surrounded by beautiful scenery. It’s the perfect place to walk through tea plantations, take in fresh mountain air, and enjoy quiet moments in nature. The winter season adds a special charm to this relaxing getaway."
    },
    {
        Place: "Janakpur",
        Budget: "Low",
        Best_Season: "Autumn",
        Setting: "Urban",
        Activities: "Heritage Tours, Spiritual",
        Image_URL: "https://www.travelhimalayan.com/wp-content/uploads/2025/04/visit-janakpur-janaki-temple.webp",
        Description: "Janakpur is a colorful city and the birthplace of Goddess Sita, making it an important pilgrimage site. It is known for its grand Janaki Temple, vibrant festivals, and beautiful Mithila art. Visitors can experience rich traditions and warm hospitality all year round."
    },
    {
        Place: "Gosaikunda",
        Budget: "Medium",
        Best_Season: "Summer",
        Setting: "Rural",
        Activities: "Pilgrimage Trek",
        Image_URL: "https://www.magicalnepal.com/trip/gosaikunda-lake-trek/#jp-carousel-12206",
        Description: "Gosaikunda is a sacred high-altitude lake surrounded by snowy peaks. It is a popular trekking and pilgrimage destination, especially during the Janai Purnima festival when thousands of devotees come to bathe in its holy waters. The area offers peaceful beauty and breathtaking views."
    },
    {
        Place: "Dhorpatan",
        Budget: "High",
        Best_Season: "Autumn",
        Setting: "Rural",
        Activities: "Wildlife Safari, Sightseeing",
        Image_URL: "https://www.footprintadventure.com/uploads/media/Dhorpatan%20Hunting%20Reserve/Dhorpatan.jpg",
        Description: "Dhorpatan is Nepal’s only hunting reserve and a remote destination for nature lovers. It has rugged landscapes, rare animals like blue sheep, and beautiful mountain villages. Trekking here offers a mix of adventure, wildlife, and cultural encounters."
    },
    {
        Place: "Rara Lake",
        Budget: "High",
        Best_Season: "Summer",
        Setting: "Rural",
        Activities: "Boating, Trekking, Photography",
        Image_URL: "https://kharpunath.com/wp-content/uploads/2021/05/Rara-lake-3-870x555.jpg",
        Description: "Rara Lake is the largest and one of the most beautiful lakes in Nepal. Surrounded by forests and snow-covered mountains, it is a peaceful escape far from busy cities. Visitors can enjoy boating, camping, and nature walks in this untouched paradise."
    },
    {
        Place: "Badimalika",
        Budget: "Medium",
        Best_Season: "Spring",
        Setting: "Rural",
        Activities: "Hiking, Sightseeing, Meditation",
        Image_URL: "https://sunriseadventuretrek.com/admin/images/package/20230505124035image-badimalika-1-1.jpg",
        Description: "Badimalika is a hidden treasure in western Nepal, known for its spiritual importance and stunning scenery. Trekkers can enjoy wide-open meadows filled with wildflowers, panoramic mountain views, and the warm culture of local villages."
    },
    {
        Place: "Annapurna Base Camp",
        Budget: "High",
        Best_Season: "Spring",
        Setting: "Rural",
        Activities: "Trekking, Sightseeing, Photography",
        Image_URL: "https://media.nepaltrekadventures.com/uploads/img/annapurna-base-camp-in-nepal-1.webp",
        Description: "Annapurna Base Camp is one of the most famous trekking destinations in Nepal. The journey takes visitors through green forests, traditional Gurung villages, and dramatic mountain landscapes, ending with breathtaking views of Annapurna I and surrounding peaks."
    },
    {
        Place: "Pathivara Temple",
        Budget: "Medium",
        Best_Season: "Winter",
        Setting: "Urban",
        Activities: "Spiritual, Meditation",
        Image_URL: "https://www.adventurehimalayantravels.com/uploads/package/gallery/1684484049-pathibhara-mata-3.webp",
        Description: "Pathivara Temple is a hilltop pilgrimage site in eastern Nepal, believed to grant wishes to devoted visitors. The trek to the temple offers not only spiritual blessings but also magnificent views of the Himalayas and rolling hills."
    },
    {
        Place: "Sukute Beach",
        Budget: "Low",
        Best_Season: "Summer",
        Setting: "Urban",
        Activities: "Rafting, Relaxation",
        Image_URL: "https://visiteverestnepal.com/wp-content/uploads/2021/04/Sukute-Beach.jpg",
        Description: "Sukute Beach is a riverside getaway known for its adventurous rafting, camping spots, and relaxing beach vibes. Located along the Bhote Koshi River, it’s a favorite spot for weekend trips close to Kathmandu."
    },
    {
        Place: "Nagarkot",
        Budget: "Low",
        Best_Season: "All",
        Setting: "Urban",
        Activities: "Cycling, Stargazing",
        Image_URL: "https://media.sublimetrails.com/uploads/img/untitled-design--40-.webp",
        Description: "Nagarkot is a peaceful hill station near Kathmandu, famous for its sunrise views over the Himalayas. Visitors can enjoy nature walks, cycling, and quiet escapes surrounded by fresh mountain air and breathtaking scenery."
    },
    {
        Place: "Everest View Point (Namche Bazaar",
        Budget: "High",
        Best_Season: "Winter",
        Setting: "Rural",
        Activities: "Trekking/Hiking",
        Image_URL: "https://images.touristlink.com/repository/V/I/E/W/F/R/O/M/view-from-everest-hotel-on-day-4.jpg",
        Description: "Everest View Point in Namche Bazaar offers some of the best close-up views of Mount Everest. It is a highlight for trekkers in the Khumbu region, combining incredible Himalayan landscapes with the culture and hospitality of the Sherpa people."
    }
];

function initHomepage() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

}


function initQuizPage() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    

    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem('quizFormData');
    }
    
    function checkCurrentQuestionSelection() {
        const currentQuestion = document.querySelector('.question-container');
        if (!currentQuestion) return false;
        
        const questionInputs = currentQuestion.querySelectorAll('input[type="radio"], input[type="checkbox"]');
        return Array.from(questionInputs).some(input => input.checked);
    }
    
    function updateNavigationButtons() {
        const nextBtn = document.querySelector('.next-btn');
        const submitBtn = document.querySelector('.submit-btn');
        
        if (nextBtn) {
            nextBtn.disabled = !checkCurrentQuestionSelection();
        }
        
        if (submitBtn) {
            submitBtn.disabled = !checkCurrentQuestionSelection();
        }
    }
    
    const allInputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    allInputs.forEach(input => {
        input.addEventListener('change', function() {
            updateNavigationButtons();
        });
    });
    
    updateNavigationButtons();
    
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });
    }

}

let displayResultsExecuted = false;
function displayResults() {
    if (displayResultsExecuted) {
        console.log("displayResults already executed, skipping...");
        return;
    }
    displayResultsExecuted = true;
    console.log("displayResults executing...");
    const preferences = {
        budget: localStorage.getItem('budget'),
        experience: localStorage.getItem('experience'),
        season: localStorage.getItem('season'),
        days: localStorage.getItem('days'),
        companion: localStorage.getItem('companion'),
        setting: localStorage.getItem('setting') || 'Urban',
        climate: localStorage.getItem('climate'),
        activity: localStorage.getItem('activity'),
        travelWith: localStorage.getItem('travel_companion'),
        atmosphere: localStorage.getItem('atmosphere')
    };

    console.log("User preferences:", preferences);
    
    console.log("=== LOCALSTORAGE CHECK ===");
    console.log("budget:", localStorage.getItem('budget'));
    console.log("season:", localStorage.getItem('season'));
    console.log("setting:", localStorage.getItem('setting'));
    console.log("activity:", localStorage.getItem('activity'));
    console.log("experience:", localStorage.getItem('experience'));
    console.log("days:", localStorage.getItem('days'));
    console.log("companion:", localStorage.getItem('companion'));
    console.log("climate:", localStorage.getItem('climate'));
    console.log("travelWith:", localStorage.getItem('travelWith'));
    console.log("atmosphere:", localStorage.getItem('atmosphere'));
    console.log("=== END LOCALSTORAGE CHECK ===");
    
    
    const nullPreferences = Object.entries(preferences).filter(([key, value]) => value === null || value === undefined);
    if (nullPreferences.length > 0) {
        console.log("❌ NULL PREFERENCES FOUND:", nullPreferences);
    } else {
        console.log("✅ ALL PREFERENCES ARE SAVED");
    }

    const scoredDestinations = destinations.map(destination => {
        let score = 0;
        
        if (destination.Budget === preferences.budget) {
            score += 3;
        } else if ((preferences.budget === "Medium" && (destination.Budget === "Low" || destination.Budget === "High")) ||
                   (preferences.budget === "Low" && destination.Budget === "Medium") ||
                   (preferences.budget === "High" && destination.Budget === "Medium")) {
            score += 1;
        }
        
        if (destination.Best_Season === preferences.season) {
            score += 2;
        } else if (destination.Best_Season === "All" || preferences.season === "All") {
            score += 1;
        }
        
        if (preferences.season === "Winter") {
            if (destination.Best_Season === "Winter") {
                score += 2; 
            } else if (destination.Best_Season === "All") {
                score += 1; 
            } else {
                score -= 1;
            }
        }
        
        if (destination.Setting === preferences.setting) {
            score += 2;
        }
        
        const destActivities = destination.Activities.split(/,\s*|\//).map(a => a.trim().toLowerCase());
        const userActivity = preferences.activity ? preferences.activity.toLowerCase() : '';
        
        if (destActivities.some(destActivity => 
            destActivity.includes(userActivity) || userActivity.includes(destActivity))) {
            score += 2;
        }
        
        if (userActivity === "hiking") {
            if (destActivities.some(destActivity => 
                destActivity.includes("trekking") || destActivity.includes("hiking"))) {
                score += 2;
            }
        }
        
        if (preferences.budget === "High" && destination.Budget === "High") {
            score += 3;
        } else if (preferences.budget === "High" && destination.Budget === "Medium") {
            score += 1; 
        } else if (preferences.budget === "High" && destination.Budget === "Low") {
            score -= 1; 
        }
        
       
        if (preferences.season === "All" && destination.Best_Season === "All") {
            score += 1;
        }
        
        if (!preferences.activity && destination.Activities.split(/,\s*|\//).length > 2) {
            score += 1;
        }
        
        // Special scoring for Cold climate preference
        if (preferences.climate === "Cold") {
            // Increase probability for cold-weather destinations
            const coldDestinations = ["Mustang", "Annapurna Base Camp", "Everest View Point (Namche Bazaar)"];
            if (coldDestinations.includes(destination.Place)) {
                score += 5; // Significant boost for cold climate preference
                console.log(`Cold climate boost applied to ${destination.Place}: +5 points`);
            }
            
            // Additional boost for high-altitude and rural destinations that are typically cold
            if (destination.Setting === "Rural" && destination.Best_Season === "Winter") {
                score += 2;
            }
            
            // Boost for trekking activities which are common in cold regions
            if (destination.Activities.toLowerCase().includes("trekking")) {
                score += 2;
            }
        }
        
        return { ...destination, score };
    });

    const recommended = scoredDestinations
        .filter(dest => dest.score >= 2)
        .sort((a, b) => b.score - a.score);
    
    if (recommended.length === 0) {
        const fallbackRecommendations = scoredDestinations
            .filter(dest => dest.score >= 1)
            .sort((a, b) => b.score - a.score);
        recommended.push(...fallbackRecommendations);
    }
    
    if (recommended.length === 0) {
        const fallbackRecommendations = scoredDestinations
            .filter(dest => dest.score >= 1)
            .sort((a, b) => b.score - a.score);
        recommended.push(...fallbackRecommendations);
    }

    console.log("All scored destinations:", scoredDestinations);
    console.log("Recommended destinations:", recommended);
    
    console.log("=== DEBUG INFO ===");
    console.log("User preferences:", preferences);
    console.log("Total destinations in dataset:", destinations.length);
    console.log("Destinations with score >= 1:", scoredDestinations.filter(d => d.score >= 1));
    console.log("Destinations with score >= 2:", scoredDestinations.filter(d => d.score >= 2));
    console.log("=== END DEBUG ===");

    const container = document.getElementById('recommendations');
    if (!container) {
        console.log("No recommendations container found");
        return;
    }
    
    container.innerHTML = '';
    
    const allContainers = document.querySelectorAll('.results-grid, .destination-card, .map-section');
    allContainers.forEach(el => {
        if (el !== container) {
            el.remove();
        }
    });
    
    console.log("Cleared recommendations container and removed any duplicate elements");

    if (recommended.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No matching destinations found</h3>
                <p>Try adjusting your preferences or explore all destinations</p>
                <div class="debug-info">
                    <p><strong>Debug Info:</strong></p>
                    <p>Budget: ${preferences.budget}</p>
                    <p>Experience: ${preferences.experience}</p>
                    <p>Season: ${preferences.season}</p>
                    <p>Setting: ${preferences.setting}</p>
                    <p>Activity: ${preferences.activity}</p>
                </div>
            </div>
        `;
        return;
    }

    const destinationsToShow = recommended.slice(0, 1);
    
    destinationsToShow.forEach((destination, index) => {
        const mapUrls = {
            "Pokhara": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilAS3vbxRU0j36bjiHHNgAZmwbGN4tAHJimOE1Gs0glV4qM188fxYzVTkVK2u82V_aHfrG5agzEXzCs0jtbtckIYnhDRe9F_XbpUGrJ6QUQdTFTykk0znHtkT0eFgRlYyTRFI05A/s1600/pokhara+kathmandu.png",
            "Lumbini": "https://en.setopati.com/wp-content/uploads/2018/10/ktmtolumbini.jpg",
            "Mustang": "https://www.intriqjourney.com/wp-content/uploads/2024/01/Image-18-1-24-at-2.31%E2%80%AFPM.jpg",
            "Chitwan": "https://richardarunachala.wordpress.com/wp-content/uploads/2012/10/image.png",
            "Ilam": "https://communityhomestay.com/_next/image?url=http%3A%2F%2Fapi.communityhomestay.com%2Fmodules%2Ffiles%2F10434825092024EDxEvo.png&w=1920&q=75",
            "Janakpur": "https://www.team-bhp.com/forum/attachments/travelogues/1507598d1463382465-details-shorter-new-route-kathmandu-nepal-nepalroadmap.gif",
            "Gosaikunda": "https://www.nepalsanctuarytreks.com/wp-content/uploads/2018/04/gosainkunda-trekking-map.jpg",
            "Dhorpatan": "https://trailrunningnepal.org/wp-content/uploads/2015/06/dhorpatan-map-from-pokhara.jpg",
            "Rara Lake": "https://www.tourtreknepal.com/assets/images/map/map1495010652.jpg",
            "Badimalika": "https://www.scribblemaps.com/api/maps/images/eIbDurSiR8_thumb_1200x630.jpg",
            "Annapurna Base Camp": "https://www.nepaltrekkinginhimalaya.com/images/articles/sz4wv-annapurna-round-trekking-map.jpg",
            "Pathivara Temple": "https://hikeontreks.com/wp-content/uploads/2021/05/Pathivara-Map.png",
            "Sukute Beach": "https://sukutebeachresorts.com/wp-content/uploads/2023/07/sukute-map-750x316-1.png",
            "Nagarkot": "https://nht-api.nepalhikingteam.com/media/attachments/media-e47762d6-1747302619.jpg",
            "Everest View Point (Namche Bazaar)": "https://www.nepaltrekkinginhimalaya.com/images/articles/hvZmT-cho-la-pass-trekking-map.jpg"
        };
        
        const fallbackMapUrls = {
            "Pokhara": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Pokhara_Valley_Map.png/800px-Pokhara_Valley_Map.png",
            "Lumbini": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lumbini_Zone_in_Nepal.png/800px-Lumbini_Zone_in_Nepal.png",
            "Mustang": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Gaupalikas_of_Mustang_District.png",
            "Chitwan": "https://upload.wikimedia.org/wikipedia/commons/2/23/Chitwan_District.png",
            "Ilam": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ilam_District_Map.png/800px-Ilam_District_Map.png",
            "Janakpur": "https://upload.wikimedia.org/wikipedia/commons/8/89/Janakpur_districts.png",
            "Gosaikunda": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Langtang_National_Park_Map.png/800px-Langtang_National_Park_Map.png",
            "Dhorpatan": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Rukum_District.png/800px-Rukum_District.png",
            "Rara Lake": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mugu_District.png/800px-Mugu_District.png",
            "Badimalika": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bajura_District.png/800px-Bajura_District.png",
            "Annapurna Base Camp": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Annapurna_Conservation_Area.png/800px-Annapurna_Conservation_Area.png",
            "Pathivara Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Taplejung_District.png/800px-Taplejung_District.png",
            "Sukute Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sindhupalchok_District.png/800px-Sindhupalchok_District.png",
            "Nagarkot": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bhaktapur_District.png/800px-Bhaktapur_District.png",
            "Everest View Point (Namche Bazaar)": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Solukhumbu_District.png/800px-Solukhumbu_District.png"
        };
        
        const mapUrl = mapUrls[destination.Place] || `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(destination.Place + ', Nepal')}&zoom=13&size=600x400&maptype=roadmap&markers=color:red%7C${encodeURIComponent(destination.Place + ', Nepal')}&key=YOUR_API_KEY`;
        const fallbackUrl = fallbackMapUrls[destination.Place] || mapUrl;
        
        const reliableMapUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Pokhara_Valley_Map.png/800px-Pokhara_Valley_Map.png";
        
        const mapPlaceholder = `
            <div style="width: 100%; height: 100%; min-height: 300px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 15px; display: flex; align-items: center; justify-content: center; flex-direction: column; color: white; text-align: center; padding: 2rem;">
                <i class="fas fa-map-marked-alt" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h4 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">Map of ${destination.Place}</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Location in Nepal</p>
                <p style="margin: 0.5rem 0 0 0; font-size: 0.8rem; opacity: 0.7;">Interactive map coming soon</p>
            </div>
        `;
        
        console.log("Destination:", destination.Place, "Map URL:", mapUrl);
        console.log("Fallback URL:", fallbackUrl);
        console.log("Reliable Map URL:", reliableMapUrl);
        
        const destinationCard = `
        <div class="destination-card" style="animation-delay: ${index * 0.2}s">
            <div class="destination-left">
                <div class="destination-image">
                    <img src="${destination.Image_URL || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}" alt="${destination.Place}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'">
                </div>
                <div class="destination-info">
                    <h3>${destination.Place}</h3>
                    <div class="destination-meta">
                        <span><strong>Budget:</strong> ${destination.Budget}</span>
                        <span><strong>Best Season:</strong> ${destination.Best_Season}</span>
                        <span><strong>Setting:</strong> ${destination.Setting}</span>
                    </div>
                    <p class="destination-description">${destination.Description}</p>
                    <div class="activities">
                        <strong>Activities:</strong>
                        ${destination.Activities.split(/,\s*|\//).map(activity => 
                            `<span class="activity-tag">${activity.trim()}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
            <div class="destination-right">
                <div class="map-section">
                    <h4><i class="fas fa-map-marked-alt"></i> Location Map</h4>
                    <div class="map-wrapper">
                        <img class="destination-map-image" 
                             src="${mapUrl}" 
                             alt="Map of ${destination.Place}" 
                             style="width: 100%; height: 100%; object-fit: contain; min-height: 300px; display: block; border-radius: 15px; background-color: #f8f9fa;"
                             onload="console.log('✅ Map loaded successfully:', '${destination.Place}'); this.style.display='block'; this.nextElementSibling.style.display='none';"
                             onerror="console.log('❌ Map failed to load:', '${destination.Place}'); this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="map-fallback" style="display: none; width: 100%; height: 100%; min-height: 300px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 15px; align-items: center; justify-content: center; flex-direction: column; color: white; text-align: center; padding: 2rem;">
                            <i class="fas fa-map-marked-alt" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                            <h4 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">Map of ${destination.Place}</h4>
                            <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Location in Nepal</p>
                            <p style="margin: 0.5rem 0 0 0; font-size: 0.8rem; opacity: 0.7;">Interactive map coming soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        
        container.innerHTML += destinationCard;
    });

    initResultsPage();
}

function initResultsPage() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });
    }

}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing application');
    
    function resetAllForms() {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
            radio.removeAttribute('checked');
        });
        
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.removeAttribute('checked');
        });
        
        if (document.querySelector('.hero') && !document.getElementById('recommendations')) {
            const quizKeys = ['budget', 'experience', 'season', 'days', 'companion', 'setting', 'climate', 'activity', 'travel_companion', 'atmosphere'];
            quizKeys.forEach(key => {
                localStorage.removeItem(key);
            });
        }
        
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    }
    
    resetAllForms();
    
    setTimeout(resetAllForms, 100);
    
    document.addEventListener('click', function(e) {
        if (e.target.type === 'radio' || e.target.type === 'checkbox') {
            if (e.target.type === 'radio') {
                const name = e.target.name;
                document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
                    if (r !== e.target) {
                        r.checked = false;
                        r.removeAttribute('checked');
                    }
                });
            }
        }
    });
    
    if (document.querySelector('.hero')) {
        initHomepage();
    }
    
    if (document.querySelector('.quiz-container')) {
        initQuizPage();
    }
    
    if (document.getElementById('recommendations')) {
    }
});
