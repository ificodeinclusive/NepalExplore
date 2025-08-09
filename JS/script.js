const places = [
    {
        name: "Pokhara",
        budget: "medium",
        experience: ["nature", "adventure", "relaxation"],
        season: ["spring", "autumn"],
        duration: [3, 7],
        travelType: ["couple", "friends", "family"],
        climate: ["moderate", "warm"],
        atmosphere: "balanced",
        Image_URL: "https://mysticadventureholidays.com/_next/image?url=https%3A%2F%2Fmedia.app.mysticadventureholidays.com%2Fuploads%2Ffullbanner%2Fpokhara-socoal.webp&w=3840&q=75",
        Description: "Pokhara is a beautiful city surrounded by the Annapurna mountains and blessed with the tranquil Phewa Lake. It is the perfect place for both adventure and relaxation, offering paragliding over scenic valleys, peaceful boat rides, and hikes to viewpoints like Sarangkot."
    },
    {
        name: "Lumbini",
        budget: "low",
        experience: ["cultural", "spiritual"],
        season: ["winter", "spring"],
        duration: [2, 4],
        travelType: ["solo", "couple", "family"],
        climate: ["warm", "moderate"],
        atmosphere: "peaceful",
        Image_URL: "https://lumbinidevtrust.gov.np/upload_file/images/slider/1721894939_276597348_lumbini.jpg",
        Description: "Lumbini is the birthplace of Lord Buddha and a peaceful place filled with monasteries, gardens, and historical sites. Visitors can explore temples built by different countries, meditate in quiet surroundings, and learn about the life of Buddha."
    },
    {
        name: "Mustang",
        budget: "high",
        experience: ["nature", "adventure", "cultural"],
        season: ["spring", "autumn"],
        duration: [5, 10],
        travelType: ["friends", "couple", "solo"],
        climate: ["cold", "moderate"],
        atmosphere: "peaceful",
        Image_URL: "https://www.himalayanascent.com/wp-content/uploads/2019/02/untitled-40.jpg",
        Description: "Mustang is a remote and fascinating region known as the 'Forbidden Kingdom.' It offers a mix of dramatic landscapes, colorful cliffs, and Tibetan-inspired culture. Visitors can trek through ancient villages and explore mysterious caves."
    },
    {
        name: "Chitwan",
        budget: "medium",
        experience: ["wildlife", "nature", "cultural"],
        season: ["winter", "spring", "autumn"],
        duration: [2, 5],
        travelType: ["family", "friends", "couple"],
        climate: ["warm", "moderate"],
        atmosphere: "balanced",
        Image_URL: "https://www.andbeyond.com/wp-content/uploads/sites/5/indian-elephant-chitwan-nepal.jpg",
        Description: "Chitwan is famous for its national park, which is home to rhinos, tigers, elephants, and many rare birds. Visitors can go on exciting jungle safaris, take canoe rides on the Rapti River, and experience the unique culture of the Tharu people."
    },
    {
        name: "Ilam",
        budget: "low",
        experience: ["nature", "relaxation", "cultural"],
        season: ["spring", "autumn"],
        duration: [2, 4],
        travelType: ["family", "couple", "solo"],
        climate: ["moderate", "cold"],
        atmosphere: "peaceful",
        Image_URL: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2021/money/kanyamweb-1624287001.jpg&w=900&height=601",
        Description: "Ilam is a peaceful hill town covered in green tea gardens and surrounded by beautiful scenery. It's the perfect place to walk through tea plantations, take in fresh mountain air, and enjoy quiet moments in nature."
    },
    {
        name: "Janakpur",
        budget: "low",
        experience: ["cultural", "spiritual"],
        season: ["winter", "spring"],
        duration: [2, 3],
        travelType: ["family", "couple", "solo"],
        climate: ["warm", "moderate"],
        atmosphere: "lively",
        Image_URL: "https://www.travelhimalayan.com/wp-content/uploads/2025/04/visit-janakpur-janaki-temple.webp",
        Description: "Janakpur is a colorful city and the birthplace of Goddess Sita, making it an important pilgrimage site. It is known for its grand Janaki Temple, vibrant festivals, and beautiful Mithila art."
    },
    {
        name: "Gosaikunda",
        budget: "medium",
        experience: ["nature", "spiritual", "adventure"],
        season: ["autumn", "spring"],
        duration: [4, 7],
        travelType: ["friends", "solo"],
        climate: ["cold", "moderate"],
        atmosphere: "peaceful",
        Image_URL: "https://www.magicalnepal.com/trip/gosaikunda-lake-trek/#jp-carousel-12206",
        Description: "Gosaikunda is a sacred high-altitude lake surrounded by snowy peaks. It is a popular trekking and pilgrimage destination, especially during the Janai Purnima festival when thousands of devotees come to bathe in its holy waters."
    },
    {
        name: "Dhorpatan",
        budget: "medium",
        experience: ["nature", "wildlife", "adventure"],
        season: ["spring", "autumn"],
        duration: [4, 6],
        travelType: ["friends", "solo"],
        climate: ["cold", "moderate"],
        atmosphere: "peaceful",
        Image_URL: "https://www.footprintadventure.com/uploads/media/Dhorpatan%20Hunting%20Reserve/Dhorpatan.jpg",
        Description: "Dhorpatan is Nepal's only hunting reserve and a remote destination for nature lovers. It has rugged landscapes, rare animals like blue sheep, and beautiful mountain villages."
    },
    {
        name: "Rara Lake",
        budget: "medium",
        experience: ["nature", "adventure", "relaxation"],
        season: ["spring", "autumn"],
        duration: [4, 7],
        travelType: ["friends", "solo", "couple"],
        climate: ["cold", "moderate"],
        atmosphere: "peaceful",
        Image_URL: "https://kharpunath.com/wp-content/uploads/2021/05/Rara-lake-3-870x555.jpg",
        Description: "Rara Lake is the largest and one of the most beautiful lakes in Nepal. Surrounded by forests and snow-covered mountains, it is a peaceful escape far from busy cities."
    },
    {
        name: "Badimalika",
        budget: "medium",
        experience: ["nature", "spiritual", "adventure"],
        season: ["autumn"],
        duration: [4, 7],
        travelType: ["solo", "friends"],
        climate: ["cold", "moderate"],
        atmosphere: "peaceful",
        Image_URL: "https://sunriseadventuretrek.com/admin/images/package/20230505124035image-badimalika-1-1.jpg",
        Description: "Badimalika is a hidden treasure in western Nepal, known for its spiritual importance and stunning scenery. Trekkers can enjoy wide-open meadows filled with wildflowers and panoramic mountain views."
    },
    {
        name: "Annapurna Base Camp",
        budget: "high",
        experience: ["nature", "adventure"],
        season: ["spring", "autumn"],
        duration: [7, 12],
        travelType: ["friends", "solo"],
        climate: ["cold", "moderate"],
        atmosphere: "peaceful",
        Image_URL: "https://media.nepaltrekadventures.com/uploads/img/annapurna-base-camp-in-nepal-1.webp",
        Description: "Annapurna Base Camp is one of the most famous trekking destinations in Nepal. The journey takes visitors through green forests, traditional Gurung villages, and dramatic mountain landscapes."
    },
    {
        name: "Pathivara Temple",
        budget: "low",
        experience: ["spiritual", "nature"],
        season: ["spring", "autumn"],
        duration: [2, 4],
        travelType: ["solo", "family"],
        climate: ["cold", "moderate"],
        atmosphere: "peaceful",
        Image_URL: "https://www.adventurehimalayantravels.com/uploads/package/gallery/1684484049-pathibhara-mata-3.webp",
        Description: "Pathivara Temple is a hilltop pilgrimage site in eastern Nepal, believed to grant wishes to devoted visitors. The trek to the temple offers spiritual blessings and magnificent views of the Himalayas."
    },
    {
        name: "Sukute Beach",
        budget: "medium",
        experience: ["relaxation", "adventure"],
        season: ["spring", "autumn", "winter"],
        duration: [1, 2],
        travelType: ["friends", "couple"],
        climate: ["warm", "moderate"],
        atmosphere: "lively",
        Image_URL: "https://visiteverestnepal.com/wp-content/uploads/2021/04/Sukute-Beach.jpg",
        Description: "Sukute Beach is a riverside getaway known for its adventurous rafting, camping spots, and relaxing beach vibes. Located along the Bhote Koshi River, it's a favorite spot for weekend trips close to Kathmandu."
    },
    {
        name: "Nagarkot",
        budget: "low",
        experience: ["nature", "relaxation"],
        season: ["spring", "autumn", "winter"],
        duration: [1, 3],
        travelType: ["couple", "family"],
        climate: ["cold", "moderate"],
        atmosphere: "peaceful",
        Image_URL: "https://media.sublimetrails.com/uploads/img/untitled-design--40-.webp",
        Description: "Nagarkot is a peaceful hill station near Kathmandu, famous for its sunrise views over the Himalayas. Visitors can enjoy nature walks, cycling, and quiet escapes surrounded by fresh mountain air."
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
        input.addEventListener('change', updateNavigationButtons);
    });
    
    updateNavigationButtons();
}

function displayResults() {
    console.log('displayResults function called');
    console.log('Places array length:', places.length);
    
    const userPreferences = {
        budget: localStorage.getItem('budget')?.toLowerCase(),
        experience: localStorage.getItem('experience')?.toLowerCase(),
        season: localStorage.getItem('season')?.toLowerCase(),
        travelType: localStorage.getItem('companion')?.toLowerCase(),
        climate: localStorage.getItem('climate')?.toLowerCase(),
        atmosphere: localStorage.getItem('atmosphere')?.toLowerCase()
    };

    const finalChoice = localStorage.getItem('final');
    console.log('User Preferences:', userPreferences);
    console.log('Final Choice:', finalChoice);

    Object.keys(userPreferences).forEach(key => {
        if (userPreferences[key] === null || userPreferences[key] === undefined) {
            console.warn(`Missing preference: ${key}`);
        }
    });

    // Filter places based on exact tag matching - ALL conditions must match
    const matchingPlaces = places.filter(place => {
        // Check if all user preferences match exactly
        const budgetMatch = userPreferences.budget && place.budget === userPreferences.budget;
        const experienceMatch = userPreferences.experience && (Array.isArray(place.experience) ? place.experience.includes(userPreferences.experience) : place.experience === userPreferences.experience);
        const seasonMatch = userPreferences.season && (Array.isArray(place.season) ? place.season.includes(userPreferences.season) : place.season === userPreferences.season);
        const travelTypeMatch = userPreferences.travelType && (Array.isArray(place.travelType) ? place.travelType.includes(userPreferences.travelType) : place.travelType === userPreferences.travelType);
        const climateMatch = userPreferences.climate && (Array.isArray(place.climate) ? place.climate.includes(userPreferences.climate) : place.climate === userPreferences.climate);
        const atmosphereMatch = userPreferences.atmosphere && place.atmosphere === userPreferences.atmosphere;
        
        const matches = {
            budget: budgetMatch,
            experience: experienceMatch,
            season: seasonMatch,
            travelType: travelTypeMatch,
            climate: climateMatch,
            atmosphere: atmosphereMatch
        };
        
        // Count how many conditions match
        const matchCount = Object.values(matches).filter(match => match).length;
        
        console.log(`${place.name}: Matches`, matches, `Count: ${matchCount}/6`);
        
        // Return places that match ALL specified conditions (all 6 must be true)
        return budgetMatch && experienceMatch && seasonMatch && travelTypeMatch && climateMatch && atmosphereMatch;
    });
    
    console.log('Matching places:', matchingPlaces.map(p => p.name));
    
    const resultContainer = document.getElementById('results');
    if (!resultContainer) {
        console.error('Results container not found');
        return;
    }

    resultContainer.innerHTML = '';
    
    // If no exact matches, show places with most matching tags
    let topMatches, headerText;
    
    if (matchingPlaces.length > 0) {
        if (finalChoice === 'Get Recommendation') {
            topMatches = matchingPlaces.slice(0, 5);
            headerText = 'Top 5 Recommendations for You';
        } else {
            topMatches = matchingPlaces.slice(0, 3);
            headerText = 'Your Perfect Matches';
        }
    } else {
        // Fallback: show places with most matching individual tags (exact matches only)
        const scoredPlaces = places.map(place => {
            let matchCount = 0;
            if (userPreferences.budget && place.budget === userPreferences.budget) matchCount++;
            if (userPreferences.experience && (Array.isArray(place.experience) ? place.experience.includes(userPreferences.experience) : place.experience === userPreferences.experience)) matchCount++;
            if (userPreferences.season && (Array.isArray(place.season) ? place.season.includes(userPreferences.season) : place.season === userPreferences.season)) matchCount++;
            if (userPreferences.travelType && (Array.isArray(place.travelType) ? place.travelType.includes(userPreferences.travelType) : place.travelType === userPreferences.travelType)) matchCount++;
            if (userPreferences.climate && (Array.isArray(place.climate) ? place.climate.includes(userPreferences.climate) : place.climate === userPreferences.climate)) matchCount++;
            if (userPreferences.atmosphere && place.atmosphere === userPreferences.atmosphere) matchCount++;
            
            return { ...place, matchCount };
        });
        
        // Only show places that have at least 1 matching condition
        const filteredPlaces = scoredPlaces.filter(place => place.matchCount > 0);
        filteredPlaces.sort((a, b) => b.matchCount - a.matchCount);
        
        if (filteredPlaces.length === 0) {
            topMatches = [];
            headerText = 'No Matching Destinations Found';
        } else if (finalChoice === 'Get Recommendation') {
            topMatches = filteredPlaces.slice(0, 5);
            headerText = 'Top 5 Recommendations (Partial Matches)';
        } else {
            topMatches = filteredPlaces.slice(0, 3);
            headerText = 'Best Available Matches';
        }
    }
    
    console.log('Selected matches:', topMatches.map(p => p.name));
    
    // Update the header text
    const headerElement = document.querySelector('.results-summary h2');
    if (headerElement) {
        headerElement.innerHTML = `<i class="fas fa-star"></i> ${headerText}`;
    }
    
    if (topMatches.length === 0) {
        resultContainer.innerHTML = `
            <div class="no-results">
                <h3>No matching destinations found</h3>
                <p>Try adjusting your preferences or explore all destinations</p>
            </div>
        `;
        return;
    }
    
    topMatches.forEach((place, index) => {
        const destinationCard = document.createElement('div');
        destinationCard.className = 'destination-card';
        destinationCard.style.animationDelay = `${index * 0.2}s`;
        
        // Map URLs for different places
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
            "Nagarkot": "https://nht-api.nepalhikingteam.com/media/attachments/media-e47762d6-1747302619.jpg"
        };
        
        const mapUrl = mapUrls[place.name] || `https://via.placeholder.com/600x400/667eea/white?text=${encodeURIComponent(place.name + ' Map')}`;
        
        destinationCard.innerHTML = `
            <div class="destination-left">
                <div class="destination-image">
                    <img src="${place.Image_URL}" alt="${place.name}" onerror="this.src='https://via.placeholder.com/400x250/667eea/white?text=${encodeURIComponent(place.name)}'">
                </div>
                <div class="destination-info">
                    <h3>${place.name}</h3>
                    <div class="destination-meta">
                        <span><strong>Budget:</strong> ${place.budget.charAt(0).toUpperCase() + place.budget.slice(1)}</span>
                        <span><strong>Best Season:</strong> ${place.season.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')}</span>
                        <span><strong>Duration:</strong> ${place.duration[0]}-${place.duration[1]} days</span>
                    </div>
                    <p class="destination-description">${place.Description}</p>
                    <div class="activities">
                        <strong>Experience:</strong>
                        ${place.experience.map(exp => 
                            `<span class="activity-tag">${exp.charAt(0).toUpperCase() + exp.slice(1)}</span>`
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
                             alt="Map of ${place.name}" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="map-fallback" style="display: none;">
                            <i class="fas fa-map-marked-alt" style="font-size: 3rem; margin-bottom: 1rem; color: #667eea;"></i>
                            <h4 style="margin: 0 0 0.5rem 0; font-size: 1.2rem; color: #2c3e50;">Map of ${place.name}</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #666;">Location in Nepal</p>
                            <p style="margin: 0.5rem 0 0 0; font-size: 0.8rem; color: #999;">Interactive map coming soon</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        resultContainer.appendChild(destinationCard);
    });
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    console.log('Current page:', currentPage);
    
    if (currentPage === 'index.html' || currentPage === '') {
        initHomepage();
    } else if (currentPage.startsWith('quiz')) {
        initQuizPage();
    } else if (currentPage === 'result.html') {
        console.log('Loading result page, calling displayResults...');
        displayResults();
    }
});
