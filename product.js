reservedValues = {
    // dropdown names
    "Габариты": "Dimensions",
    "Двигатель": "Engine",
    "Батарея": "Battery",
    "Безопасность": "Safety",
    "Подвеска и колёса": "Suspension and wheels",
    "Мультимедиа": "Multimedia",
    "Комфорт": "Comfort",

    "основная информация": "basic information",
    "тех. характеристики": "specifications",
    "варианты расцветок:": "color options:",                
    "доступные Комплектации:": "Available Complectations:",
    "Технические характеристики": "Specifications",
    "Основные характеристики": "Main characteristics",
    "Запас ходу (NEDC), км": "Driving range (NEDC), km",
    "Разгон 0-100 км, сек": "Acceleration 0-100 km/h, sec",
    "Ёмкость батареи, кВтг": "Battery capacity, kWh",
    "Количество мест": "Number of seats",
    "Мощность, кВт/л. с": "Power, kW/hp",
    "Максимальная скорость, км / ч": "Maximum speed, km/h",
    "Привод": "Drive",
    "Скорость зарядки": "Charging speed",
    "(медленная/быстрая), ч": "(slow/fast), hours",
    "Оставить заявку": "Submit your application",
    "Заказать в телеграм": "Order in telegram",
    // "Полный": "AWD",
    // "полный": "AWD",
    // "Передний": "FWD",
    // "передний": "FWD",
    // "задний": "RWD",
    // "Задний": "RWD",
    // "Полноприводный": "4WD",
    // "полноприводный": "4WD",
    // "при": "at",
    // "л.с.": "hp",
    // "об/мин": "rpm",
}

let reservedTableRowTitles = {

    // dropdown row titles
    "Комплектация": "Complectation",

    //Двигатель
    "Максимальная мощность электродвигателя": "Maximum motor power",
    "Мощность переднего электродвигателя": "Front motor power",
    "Максимальная скорость": "Max speed",
    "Общая максимальная мощность": "Total maximum power",
    "Крутящий момент": "Torque",
    "Количество электромоторов": "Number of electric motors",
    "Мощность заднего электродвигателя": "Rear motor power",
    "Тип двигателя": "Engine's type",

    // Батарея (електро only)
    "Емкость батареи": "Battery capacity",
    "Быстрая зарядка": "Fast charging",
    "Медленная зарядка": "Slow charging",
    "Охлаждение батареи": "Battery cooling",
    "Тип батареи": "Battery Type",
    "Преднагрев батареи": "Battery preheating",

    // Безопасность (електро only)
    "Количество подушек безопасности": "Number of airbags",
    "Система контроля давления в шинах (TPMS)": "Tire pressure monitoring system (TPMS)",
    "АБС": "ABS",
    "ЭСП": "ESP",
    "ИСОФИХ": "ISOFIX",
    "Система Auto Hold": "Auto hold system",
    "Система удержания в полосе": "Lane Keeping System",
    "Система мониторинга усталости водителя": "Driver fatigue monitoring system",
    "Система распознавания дорожных знаков": "Traffic Sign Recognition System", 
    "Активный тормоз": "Active brake",
    
    //Подвеска и колёса
    "Материал колесного диска": "Wheel material",
    "Передняя подвеска": "Front suspension",
    "Задняя подвеска": "Rear suspension", 
    "Передние тормоза": "Front brakes",
    "Задние тормоза": "Rear brakes",
    "Размер передней резины": "Front tire size",
    "Размер задней резины": "Rear tire size", 
    "Стояночный тормоз": "Parking brake",
    "Запасное колесо": "Spare wheel",

    //Мультимедиа
    "Поддержка CarPlay": "CarPlay support",
    "Приборная панель": "Dashboard", 
    "Поддержка Android Auto": "Android Auto Support", 
    "Центральный экран": "Central screen",
    "Размер центрального экрана (дюйм)": "Center screen size (inch)",
    "Система навигации GPS": "GPS navigation system",
    "Громкая связь (Hands Free)": "Speakerphone (Hands Free)", 
    "Блуэтоотх": "Bluetooth",
    "Английский язык": "English language",

    //Комфорт (електро only)
    "Бортовой компьютер": "On-board computer", 
    "Источник дальнего света": "High beam source",
    "Мульти руль": "Multi steering wheel", 
    "Парктроники": "Parking sensors", 
    "Дневные ходовые огни": "Daytime Running Lights",
    "Запуск кнопкой": "Button start",
    "Электропривод сидений": "Power seats",
    "Отделка руля": "Steering wheel trim", 
    "Проекция": "Projection",
    "Количество динамиков": "Number of speakers",
    "Подогрев передних сидений": "Heated front seats",
    "Подсветка салона": "Interior lighting", 
    "Электропривод багажника": "Power trunk", 
    "Климат контроль": "Climate control",
    "Подогрев задних сидений": "Heated rear seats",
    "Подогрев руля": "Heated steering wheel",
    "Подогрев зеркал": "Heated mirrors", 
    "Подогрев лобового стекла": "Heated windshield",
    "Сенсор дождя": "Rain sensor",
    "Датчик света": "Light sensor",
    "Круиз контроль": "Cruise control", 
    "Камера": "Camera", 
    "Источник ближнего света": "Low beam source",
    "Электрозеркала": "Electric mirrors",
    "Люк": "Hatch",
    "Автосвет": "Autolight", 
    "Беспроводная зарядка телефона": "Wireless phone charging",
    "Отделка сидений": "Seat trim",
    "Память сидений": "Seat memory",
    "Бесключевой доступ": "Keyless entry", 
    "Массаж сидений": "Seat massage",

    //Габариты
    "Объем багажника": "Trunk volume",       
    "Тип кузова": "Body type",
    "Длина": "Length",
    "Ширина": "Width",
    "Высота": "Height",
    "Снаряженная масса": "Curb weight",

    // measurements
    "(л)": "(l)",
    "(мм)": "(mm)",
    "(кг)": "(kg)",
    "(л.с.)": "(hp)",
    "(кВт)": "(kW)",
    "(км/ч)": "(km/h)",
    "(кВт/ч)": "(kW/h)",
    "(часов)": "(hours)",
    
    // Основные характеристики
    "Полный": "AWD",
    "полный": "AWD",
    "Передний": "FWD",
    "передний": "FWD",
    "задний": "RWD",
    "Задний": "RWD",
    "Полноприводный": "4WD",
    "полноприводный": "4WD",
}

reservedValuesForTable = {

    //Габариты
    "дюйма": "inches",
    "фунтов": "pounds",
    "Седан": "Sedan",
    "Кроссовер": "Crossover",
    "Внедорожник": "SUV",
    "Минивэн": "Minivan",
    "Хэтчбек": "Hatchback",
    "Лифтбек": "Liftback",
    "Фургон": "Van",
    "Пикап": "Pickup",
    "Тарга": "Targa-top",
    "Родстер": "Roadster",
    "Кабриолет": "Cabriolet",
    "Купе": "Coupe",
    "Универсал": "Station wagon",

    //Двигатель
    "Гибридный": "Hybrid",
    "Гибрид": "Hybrid",
    "Бензиновый": "Petrol",
    "Постоянный ток/синхронизация": "DC/Sync",
    "Синхронный на постоянных магнитах": "Synchronous with permanent magnets",
    "Рядный, 4-цилиндровый": "",

    // Батарея (електро only)
    "Жидкостное": "Liquid",
    "Воздушное": "Air",
    "Тройная литиевая батарея": "Triple lithium battery",
    "Литий-железо-фосфатная батарея": "Lithium iron phosphate battery",
    "Литий-ионная батарея": "Li-ion battery",

    // Безопасность (електро only)
    // -

    //Подвеска и колёса
    "Легкосплавные": "Alloy",
    "Стальные": "Steel",
    "Независимая на двойных поперечных рычагах": "Independent on double wishbones",
    "Независимая, амортизационная стойка типа МакФерсон": "Independent shock absorber strut type MacPherson strut",
    "Независимая типа McPherson": "Independent type McPherson",
    "Независимая типа McPherson, Поперечный стабилизатор": "McPherson type independent, transverse stabilizer",
    "Распорка": "Spacer",
    "Двойной поперечный рычаг": "Double wishbone",
    "Независимая МакФерсон": "Independent McPherson",
    "Независимая подвеска МакФерсон": "MacPherson independent suspension",
    "Независимая многорычажная подвеска, Поперечный стабилизатор": "Independent multi-link suspension, Transverse stabilizer",
    "Независимая многорычажная пружинная подвеска со стабилизатором": "Independent multi-link spring suspension with stabilizer",
    "Многоканальный": "Multichannel",
    "Независимая, на двойных поперечных рычагах": "Independent, double wishbone",
    "Стандарт": "Standard",
    "Независимая многорычажная подвеска": "Independent multi-link suspension",
    "Независимая на двойных поперечных рычагах": "Independent on double wishbones",
    "Зависимая типа торсионной балки на продольных рычагах": "Dependent type torsion beam trailing arms",
    "Торсионная подвеска": "Torsion suspension",
    "Независимая типа торсионной балки на продольных рычагах": "Independent trailing arm torsion beam type",
    "Многорычажная независимая подвеска": "Multi-link independent suspension",
    "Независимая многорычажная": "Independent multi-link",
    "Зависимая подвеска типа торсионной балки на продольных рычагах": "Dependent suspension type torsion beam on trailing arms",
    "Цельный мост независимая подвеска": "One-piece axle independent suspension",
    "Многорычажная независимая": "Multi-link independent",
    "Дисковые вентилируемые": "Disc ventilated",
    "Дисковые": "Disk",
    "Вентилируемые дисковые": "Ventilated disc",
    "Твердые задние дисковые": "Solid rear disc",
    "Барабанные": "Drum",
    "Барабанья": "Drum",
    "Сплошные дисковые": "Solid disc",
    "Электронное": "Electronic",
    "Электрический": "Electric",
    "Электронный": "Electronic",
    
    //Мультимедиа
    "Нм": "Nm",
    "Цифровая": "Numeric",
    "Сенсорный LCD": "Touch LCD",
    
    // Комфорт (електро only)
    "Галоген адаптивный": "Halogen adaptive",
    "LED адаптивный": "LED adaptive",
    "LED адаптивное": "LED adaptive",
    "Матрическое адаптивное": "Matrix adaptive",
    "Галоген": "Halogen",
    "Передний/Задний": "Front/Rear",      
    "Пассажир": "Passenger",
    "Водитель": "Driver",
    "Пластик": "Plastic",         
    "зоны": "zones",
    "Адаптивный на полной скорости": "Adaptive at full speed",
    "Адаптивный": "Adaptive",
    "Задняя / Зеркало": "Rear / Mirror",             
    "Автосборка": "Autobuild",
    "Память": "Memory",
    "Открывающаяся панорама": "Opening panorama",
    "Неоткрывающаяся панорама": "Non-opening panorama",
    "Ткань": "Textile",
    "экокожа": "eco-leather",
    "Экокожа": "Eco-leather",
    "Кожа": "Leather",
    "кожа": "leather",
    "Да": "Yes",
    "задняя": "rear",
    "задний": "rear",

    "при": "at",
    "л.с.": "hp",
    "об/мин": "rpm",
}
// reservedValues = {
//     "основная информация": "basic information",
//     "тех. характеристики": "specifications",
//     "варианты расцветок:": "color options:",
//     "доступные Комплектации:": "Available Complectations:",
//     "Технические характеристики": "Specifications",
//     "Комплектация": "Complectation",
//     "Запас ходу (NEDC), км": "Driving range (NEDC), km",
//     "Разгон 0-100 км, сек": "Acceleration 0-100 km/h, sec",
//     "Ёмкость батареи, кВтг": "Battery capacity, kWh",
//     "Количество мест": "Number of seats",
//     "Мощность, кВт/л. с": "Power, kW/hp",
//     "Максимальная скорость, км / ч": "Maximum speed, km/h",
//     "Привод": "Drive",
//     "Скорость зарядки (медленная/быстрая), ч": "Charging speed (slow/fast), hours",
//     // "Полный": "AWD",
//     // "полный": "AWD",
//     // "Передний": "FWD",
//     // "передний": "FWD",
//     // "задний": "RWD",
//     // "Задний": "RWD",
//     // "Полноприводный": "4WD",
//     // "полноприводный": "4WD",
//     // "": "", 
//     // "": "", 
//     // "при": "at",
//     // "л.с.": "hp",
//     // "об/мин": "rpm",
// }
// reservedTableRowTitles = {
//     // Основные характеристики
//     "Полный": "AWD",
//     "полный": "AWD",
//     "Передний": "FWD",
//     "передний": "FWD",
//     "задний": "RWD",
//     "Задний": "RWD",
//     "Полноприводный": "4WD",
//     "полноприводный": "4WD",
// }

// reservedValuesForTable = {
//     "при": "at",
//     "л.с.": "hp",
//     "об/мин": "rpm",
// }

//translateToEN();

if (document.URL.includes("?lang=en")) {
    translateToEN();
}

function translateToEN() {
    //TODO: //translateDynamic();

    let headerEN = document.getElementsByClassName("nav-en")[0];
    let headerRU = document.getElementsByClassName("nav-ru")[0];
    headerEN.style.display = "block";
    headerRU.style.display = "none";

    let feedbackModelEN = document.getElementsByClassName("model-feedback-en")[0];
    let feedbackModelRU = document.getElementsByClassName("model-feedback-ru")[0];
    feedbackModelEN.style.display = "block";
    feedbackModelRU.style.display = "none";
    //footer-ru
    let footerEN = document.getElementsByClassName("footer-en")[0];
    let footerRU = document.getElementsByClassName("footer-ru")[0];
    footerEN.style.display = "block";
    footerRU.style.display = "none";
    
    let tabs = document.getElementsByClassName("car-tabs-link-text");
    for (let i = 0; i < tabs.length; i++) {
        for (const [key, value] of Object.entries(reservedValues)) {
            if (tabs[i].textContent.includes(key)) {
                tabs[i].textContent = tabs[i].textContent.replace(key, value);
            }
        }
    }

    let colorTitles = document.getElementsByClassName("car-colors-title");
    for (let i = 0; i < colorTitles.length; i++) {
        for (const [key, value] of Object.entries(reservedValues)) {
            if (colorTitles[i].textContent.includes(key)) {
                colorTitles[i].textContent = colorTitles[i].textContent.replace(key, value);
            }
        }
    }

    let specificationDiv = document.getElementsByClassName("characteristics-car-title-wrapper")[0];
    let specificationTitle = specificationDiv.getElementsByTagName("h2")[0];
    for (const [key, value] of Object.entries(reservedValues)) {
        if (specificationTitle.textContent.includes(key)) {
            specificationTitle.textContent = specificationTitle.textContent.replace(key, value);
        }
    }

    // full table
    let complectationTitle = document.getElementsByClassName("characteristics-car-name-title")[0];
    for (const [key, value] of Object.entries(reservedValues)) {
        if (complectationTitle.textContent.includes(key)) {
            complectationTitle.textContent = complectationTitle.textContent.replace(key, value);
        }
    }

    let titlesElem = document.getElementsByClassName("characteristics-car-name-text")[0];
    for (const [key, value] of Object.entries(reservedValues)) {
        while (titlesElem.innerHTML.includes(key)) {
            titlesElem.innerHTML = titlesElem.innerHTML.replace(key, value);
        }
    }

    
    let insideTable = document.getElementsByClassName("characteristics-car-rich-text");
    for (let i = 0; i < insideTable.length; i++) {
        for (const [key, value] of Object.entries(reservedValuesForTable)) {
            while (insideTable[i].innerHTML.includes(key)) {
                insideTable[i].innerHTML = insideTable[i].innerHTML.replace(key, value);
            }
        }
        for (const [key, value] of Object.entries(reservedTableRowTitles)) {
            while (insideTable[i].innerHTML.includes(key)) {
                insideTable[i].innerHTML = insideTable[i].innerHTML.replace(key, value);
            }
        }
    }

    // let tabs = document.getElementsByClassName("car-tabs-link-text");
    // for (let i = 0; i < tabs.length; i++) {
    //     // tabs[i].textContent = (tabs[i].textContent in reservedValues ?
    //     //         reservedValues[tabs[i].textContent] :
    //     //         tabs[i].textContent);
    //     for (const [key, value] of Object.entries(reservedValues)) {
    //         while (tabs[i].innerHTML.includes(key)) {
    //             tabs[i].innerHTML = tabs[i].innerHTML.replace(key, value);
    //         }
    //     }
    // }

    let availableComplectations = document.getElementsByClassName("car-tab-options-title");
    for (let i = 0; i < availableComplectations.length; i++) {
        // availableComplectations[i].textContent = (availableComplectations[i].textContent in reservedValues ?
        //         reservedValues[availableComplectations[i].textContent] :
        //         availableComplectations[i].textContent);
        for (const [key, value] of Object.entries(reservedValues)) {
            while (availableComplectations[i].innerHTML.includes(key)) {
                availableComplectations[i].innerHTML = availableComplectations[i].innerHTML.replace(key, value);
            }
        } 
    }
    
    let buttonsDiv = document.getElementsByClassName("c-cms-tabs")[0];
    let buttonsText = buttonsDiv.getElementsByClassName("btn-text");
    for (let i = 0; i < buttonsText.length; i++) {
        // buttonsText[i].textContent = (buttonsText[i].textContent in reservedValues ?
        //         reservedValues[buttonsText[i].textContent] :
        //         buttonsText[i].textContent);
        for (const [key, value] of Object.entries(reservedValues)) {
            while (buttonsText[i].innerHTML.includes(key)) {
                buttonsText[i].innerHTML = buttonsText[i].innerHTML.replace(key, value);
            }
        } 
    }

    // let specificationDiv = document.getElementsByClassName("car-characteristics-title-wrapper")[0];
    // let specificationTitle = specificationDiv.getElementsByTagName("h2")[0];
    // //specificationTitle2.textContent = reservedValues[specificationTitle2.textContent];
    // for (const [key, value] of Object.entries(reservedValues)) {
    //     while (specificationTitle.innerHTML.includes(key)) {
    //         specificationTitle.innerHTML = specificationTitle.innerHTML.replace(key, value);
    //     }
    // } 

    let elems = document.getElementsByClassName("car-characteristics-item-title");
    for (let i = 0; i < elems.length; i++) {
        // elems[i].textContent = (elems[i].textContent in reservedValues ?
        //         reservedValues[elems[i].textContent] :
        //         elems[i].textContent);
        for (const [key, value] of Object.entries(reservedValues)) {
            while (elems[i].innerHTML.includes(key)) {
                elems[i].innerHTML = elems[i].innerHTML.replace(key, value);
            }
        } 
    }

    let complectationElems = document.getElementsByClassName("car-characteristics-item-text");
    for (let i = 0; i < complectationElems.length; i++) {
        for (const [key, value] of Object.entries(reservedTableRowTitles)) {
            if (complectationElems[i].textContent.includes(key)) {
                complectationElems[i].textContent = complectationElems[i].textContent.replace(key, value);
            }
        }
    }

    let dropdownTitles = document.getElementsByClassName("faq-dropdown-title");
    for (let i = 0; i < dropdownTitles.length; i++) {
        // dropdownTitles[i].textContent = (dropdownTitles[i].textContent in reservedValues ?
        //         reservedValues[dropdownTitles[i].textContent] :
        //         dropdownTitles[i].textContent);
        for (const [key, value] of Object.entries(reservedValues)) {
            while (dropdownTitles[i].innerHTML.includes(key)) {
                dropdownTitles[i].innerHTML = dropdownTitles[i].innerHTML.replace(key, value);
            }
        }
    }

    let dropdownNodeTitles = document.getElementsByClassName("characteristics-car-name-title");
    for (let i = 0; i < dropdownNodeTitles.length; i++) {
        // dropdownNodeTitles[i].textContent = (dropdownNodeTitles[i].textContent in reservedValues ?
        //         reservedValues[dropdownNodeTitles[i].textContent] :
        //         dropdownNodeTitles[i].textContent);
        for (const [key, value] of Object.entries(reservedValues)) {
            while (dropdownNodeTitles[i].innerHTML.includes(key)) {
                dropdownNodeTitles[i].innerHTML = dropdownNodeTitles[i].innerHTML.replace(key, value);
            }
        }
    }
    
    let dropdownRowTitles = document.getElementsByClassName("characteristics-car-name-text");
    for (let i = 0; i < dropdownRowTitles.length; i++) {
        for (const [key, value] of Object.entries(reservedTableRowTitles)) {
            while (dropdownRowTitles[i].innerHTML.includes(key)) {
                dropdownRowTitles[i].innerHTML = dropdownRowTitles[i].innerHTML.replace(key, value);
            }
        }
    }

    let insideDropdowns = document.getElementsByClassName("characteristics-car-rich-text");
    for (let i = 0; i < insideDropdowns.length; i++) {
        for (const [key, value] of Object.entries(reservedValuesForTable)) {
            while (insideDropdowns[i].innerHTML.includes(key)) {
                insideDropdowns[i].innerHTML = insideDropdowns[i].innerHTML.replace(key, value);
            }
        }
    }
}

function translateDynamic(paragraphsText3) {
    let fullContent = document.getElementsByClassName("car-tab-left-content")[0];
    let paragraphs = fullContent.getElementsByTagName("p");
 
    for (let i = 0; i < paragraphs.length; i++) {

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:5000/translate", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
               
                paragraphs[i].textContent = response.translatedText;
            } else {
                // Handle the error
            }
            
        };

        const requestBody = JSON.stringify({
            q: paragraphs[i].textContent,
            source: "ru",
            target: "en",
            format: "text",
            //api_key: "", // Specify your API key
        });

        xhr.send(requestBody);
        paragraphs[i].textContent = "";
    }
}