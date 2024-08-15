const characters = [
    { name: 'Sakura', image: 'images/Sakura.png', rarity: 'ssr', weight: 0.5 },
    { name: 'Aloe vera', image: 'images/Aloe vera.png', rarity: 'c', weight: 30 },
    { name: 'Maple', image: 'images/Maple.png', rarity: 'uc', weight: 50 },
    { name: 'Cymbopogon citratus', image: 'images/Cymbopogon citratus.png', rarity: 'uc', weight: 50 },
    { name: 'Allamanda cathartica', image: 'images/Allamanda cathartica.png', rarity: 'c', weight: 30 },
    { name: 'Cherry', image: 'images/Cherry.png', rarity: 'r', weight: 10 },
    { name: 'Talinum paniculatum Gaertn', image: 'images/Talinum paniculatum Gaertn.png', rarity: 'ur', weight: 2.5 },
    { name: 'Euphorbia milii', image: 'images/Euphorbia milii.png', rarity: 'sr', weight: 5 },
    { name: 'Daisy', image: 'images/Daisy.png', rarity: 'r', weight: 10 },
    { name: 'Wisteria', image: 'images/Wisteria.png', rarity: 'ssr', weight: 0.5 },
    { name: 'Higanbana', image: 'images/Higanbana.png', rarity: 'sr', weight: 5 },
    { name: 'Cassia fistula', image: 'images/Cassia fistula.png', rarity: 'sr', weight: 5 },
    { name: 'Rose', image: 'images/Rose.png', rarity: 'r', weight: 10 },
    { name: 'Verdolaga', image: 'images/Verdolaga.png', rarity: 'uc', weight: 50 },
    { name: 'Lavender', image: 'images/Lavender.png', rarity: 'r', weight: 10 },
    { name: 'Cactaceae', image: 'images/Cactaceae.png', rarity: 'r', weight: 10 },
    { name: 'Viola tricolor var hortensis', image: 'images/Viola tricolor var hortensis.png', rarity: 'uc', weight: 50 },
    { name: 'Delphinium', image: 'images/Delphinium.png', rarity: 'r', weight: 10 },
    { name: 'Lily', image: 'images/Lily.png', rarity: 'uc', weight: 50 },
    { name: 'Bonsai', image: 'images/Bonsai.png', rarity: 'c', weight: 30 },
    { name: 'Ficus religiosa', image: 'images/Ficus religiosa.png', rarity: 'sr', weight: 5 },
    { name: 'Nerium oleander', image: 'images/Nerium oleander.png', rarity: 'r', weight: 10 },
    { name: 'Hopea odorata', image: 'images/Hopea odorata.png', rarity: 'uc', weight: 50 },
    { name: 'Daffodil', image: 'images/Daffodil.png', rarity: 'sr', weight: 5 },
    { name: 'Tulip', image: 'images/Tulip.png', rarity: 'r', weight: 10 },
    { name: 'Bluebell', image: 'images/Bluebell.png', rarity: 'uc', weight: 50 },
    { name: 'Oak', image: 'images/Oak.png', rarity: 'c', weight: 30 },
    { name: 'Chili', image: 'images/Chili.png', rarity: 'c', weight: 30 },
    { name: 'Camellia', image: 'images/Camellia.png', rarity: 'r', weight: 10 },
    { name: 'Ixora', image: 'images/Ixora.png', rarity: 'c', weight: 30 },
    { name: 'Lagerstroemia speciosa', image: 'images/Lagerstroemia speciosa.png', rarity: 'c', weight: 30 },
    { name: 'Arecaceae', image: 'images/Arecaceae.png', rarity: 'c', weight: 30 },
    { name: 'Peppermint', image: 'images/Peppermint.png', rarity: 'r', weight: 10 },
    { name: 'Chrysanthemum', image: 'images/Chrysanthemum.png', rarity: 'uc', weight: 50 },
    { name: 'Garlic', image: 'images/Garlic.png', rarity: 'c', weight: 30 },
    { name: 'Salvia rosmarinus', image: 'images/Salvia rosmarinus.png', rarity: 'uc', weight: 50 },
    { name: 'Hibiscus', image: 'images/Hibiscus.png', rarity: 'uc', weight: 50 },
    { name: 'Fir', image: 'images/Fir.png', rarity: 'r', weight: 10 },
    { name: 'Jasminum', image: 'images/Jasminum.png', rarity: 'c', weight: 30 },
    { name: 'Fargesia', image: 'images/Fargesia.png', rarity: 'c', weight: 30 },
    { name: 'Myosotis', image: 'images/Myosotis.png', rarity: 'sr', weight: 5 },
    { name: 'Alocasia', image: 'images/Alocasia.png', rarity: 'uc', weight: 50 },
    { name: 'Ginkgo', image: 'images/Ginkgo.png', rarity: 'ssr', weight: 0.5 },
    { name: 'Buttercup', image: 'images/Buttercup.png', rarity: 'uc', weight: 50 },
    { name: 'Osmanthus', image: 'images/Osmanthus.png', rarity: 'c', weight: 30 },
    { name: 'Parsley', image: 'images/Parsley.png', rarity: 'uc', weight: 50 },
    { name: 'Gympie', image: 'images/Gympie.png', rarity: 'r', weight: 10 },
    { name: 'Cosmos', image: 'images/Cosmos.png', rarity: 'sr', weight: 5 },
    { name: 'Raspberry', image: 'images/Raspberry.png', rarity: 'r', weight: 10 },
    { name: 'Phlox', image: 'images/Phlox.png', rarity: 'sr', weight: 5 },
    { name: 'Peucedanifolius', image: 'images/Peucedanifolius.png', rarity: 'uc', weight: 50 },
    { name: 'Red Cornflower', image: 'images/Red Cornflower.png', rarity: 'r', weight: 10 },
    { name: 'Winter jasmine', image: 'images/Winter jasmine.png', rarity: 'uc', weight: 50 },
    { name: 'Dahlia', image: 'images/Dahlia.png', rarity: 'c', weight: 30 },
    { name: 'Azaleda', image: 'images/Azaleda.png', rarity: 'r', weight: 10 },
    { name: 'Ume', image: 'images/Ume.png', rarity: 'c', weight: 30 },
    { name: 'Hyacinth', image: 'images/Hyacinth.png', rarity: 'c', weight: 30 },
    { name: 'Olive', image: 'images/Olive.png', rarity: 'r', weight: 10 },
    { name: 'Agelonia', image: 'images/Agelonia.png', rarity: 'uc', weight: 50 },
    { name: 'Sphaerocoryne', image: 'images/Sphaerocoryne.png', rarity: 'c', weight: 30 },
    { name: 'Plumeria', image: 'images/Plumeria.png', rarity: 'c', weight: 30 },
    { name: 'Spathoglottis', image: 'images/Spathoglottis.png', rarity: 'uc', weight: 50 },
    { name: 'Helianthus', image: 'images/Helianthus.png', rarity: 'c', weight: 30 },
    { name: 'Hazelnut', image: 'images/Hazelnut.png', rarity: 'c', weight: 30 },
    { name: 'Philodendron', image: 'images/Philodendron.png', rarity: 'c', weight: 30 },
    { name: 'Tecoma stans', image: 'images/Tecoma stans.png', rarity: 'c', weight: 30 },
    { name: 'Pinus resinosa', image: 'images/Pinus resinosa.png', rarity: 'r', weight: 10 },
    { name: 'Fagus', image: 'images/Fagus.png', rarity: 'c', weight: 30},
    { name: 'Gomphia', image: 'images/Gomphia.png', rarity: 'uc', weight: 50 },
    { name: 'Fraxinus', image: 'images/Fraxinus.png', rarity: 'uc', weight: 50 },
    { name: 'Heliconia', image: 'images/Heliconia.png', rarity: 'c', weight: 30 },
    { name: 'Dracaena', image: 'images/Dracaena.png', rarity: 'c', weight: 30 },
    { name: 'Sansevieria', image: 'images/Sansevieria.png', rarity: 'c', weight: 30 },
    { name: 'Sweet Osmanthus', image: 'images/Sweet Osmanthus.png', rarity: 'ur', weight: 2.5 },
    { name: 'Gomphrena globosa', image: 'images/Gomphrena globosa.png', rarity: 'c', weight: 30 },
    { name: 'Peach', image: 'images/Peach.png', rarity: 'sr', weight: 5 },
    { name: 'Adansonia digitata', image: 'images/Adansonia digitata.png', rarity: 'c', weight: 30 },
    { name: 'Namwa', image: 'images/Namwa.png', rarity: 'c', weight: 30 },
    { name: 'Cocos', image: 'images/Cocos.png', rarity: 'c', weight: 30 },
    { name: 'Rhizophora', image: 'images/Rhizophora.png', rarity: 'r', weight: 10 },
    { name: 'Oryza', image: 'images/Oryza.png', rarity: 'c', weight: 30 },
    { name: 'Lotus', image: 'images/Lotus.png', rarity: 'c', weight: 30 },
    { name: 'jessamine', image: 'images/jessamine.png', rarity: 'c', weight: 30 },
    { name: 'fern', image: 'images/fern.png', rarity: 'c', weight: 30 },
    { name: 'Kariyat', image: 'images/Kariyat.png', rarity: 'uc', weight: 50 },
    { name: 'kekhuay', image: 'images/kekhuay.png', rarity: 'c', weight: 30 },
    { name: 'Holi', image: 'images/Holi.png', rarity: 'uc', weight: 50 },
    { name: 'Salvia', image: 'images/Salvia.png', rarity: 'uc', weight: 50 },
    { name: 'Ocimum', image: 'images/Ocimum.png', rarity: 'c', weight: 30 },
    { name: 'Hellbender', image: 'images/Hellbender.png', rarity: 'uc', weight: 50 },
    { name: 'Humulus', image: 'images/Humulus.png', rarity: 'c', weight: 30 },
    { name: 'Vanilla', image: 'images/Vanilla.png', rarity: 'uc', weight: 50 },
    { name: 'Verbena', image: 'images/Verbena.png', rarity: 'c', weight: 30 },
    { name: 'Plinia', image: 'images/Plinia.png', rarity: 'uc', weight: 50 },
    { name: 'Thevetia', image: 'images/Thevetia.png', rarity: 'secret', weight: 0.1 },
    { name: 'Cha', image: 'images/Cha.png', rarity: 'c', weight: 30 },
    { name: 'Mimosa', image: 'images/Mimosa.png', rarity: 'c', weight: 30 },
    { name: 'Dionaea', image: 'images/Dionaea.png', rarity: 'c', weight: 30 },
    { name: 'Agapanthus', image: 'images/Agapanthus.png', rarity: 'uc', weight: 50 },
    { name: 'Hydrangea', image: 'images/Hydrangea.png', rarity: 'uc', weight: 50 },
    { name: 'Japle', image: 'images/Japle.png', rarity: 'r', weight: 10 },
    { name: 'Symphytum', image: 'images/Symphytum.png', rarity: 'uc', weight: 50 },
    { name: 'Digitalis', image: 'images/Digitalis.png', rarity: 'ur', weight: 2.5 },
    { name: 'Boxwood', image: 'images/Boxwood.png', rarity: 'ur', weight: 2.5 },
    { name: 'Alcea rosea', image: 'images/Alcea rosea.png', rarity: 'uc', weight: 50 },
    { name: 'Mirabilis', image: 'images/Mirabilis.png', rarity: 'sr', weight: 5 },
    { name: 'Daphniphyllum', image: 'images/Daphniphyllum.png', rarity: 'r', weight: 10 },
    { name: 'Mangifera', image: 'images/Mangifera.png', rarity: 'c', weight: 30 },
    { name: 'Clerodendrum', image: 'images/Clerodendrum.png', rarity: 'sr', weight: 5 },
    { name: 'Clitoria', image: 'images/Clitoria.png', rarity: 'uc', weight: 50 },
    { name: 'Dill', image: 'images/Dill.png', rarity: 'c', weight: 30 },
    { name: 'Lagerstroemia', image: 'images/Lagerstroemia.png', rarity: 'r', weight: 10 },
    { name: 'cacao', image: 'images/cacao.png', rarity: 'r', weight: 10 },
    { name: 'Vitis', image: 'images/Vitis.png', rarity: 'r', weight: 10 },
    { name: 'Berry', image: 'images/Berry.png', rarity: 'c', weight: 30 },
    { name: 'Apple', image: 'images/Apple.png', rarity: 'c', weight: 30 },
    { name: 'Sage', image: 'images/Sage.png', rarity: 'r', weight: 10 },
    { name: 'hijiki', image: 'images/hijiki.png', rarity: 'uc', weight: 50 },
    { name: 'beech', image: 'images/beech.png', rarity: 'c', weight: 30 },
    { name: 'Salix', image: 'images/Salix.png', rarity: 'uc', weight: 50 },
    { name: 'Orange', image: 'images/Orange.png', rarity: 'c', weight: 30 },
    { name: 'Myrsinoideae', image: 'images/Myrsinoideae.png', rarity: 'uc', weight: 50 },
    { name: 'Actinidia', image: 'images/Actinidia.png', rarity: 'c', weight: 30 },
    { name: 'Dimocarpus', image: 'images/Dimocarpus.png', rarity: 'r', weight: 10 },
    { name: 'Ananas', image: 'images/Ananas.png', rarity: 'uc', weight: 50 },
    { name: 'Stawberry', image: 'images/Stawberry.png', rarity: 'uc', weight: 1 },
    { name: 'Olea', image: 'images/Olea.png', rarity: 'c', weight: 30 },
    { name: 'Gerbera', image: 'images/Gerbera.png', rarity: 'sr', weight: 5 },
    { name: 'Patience Rose', image: 'images/Patience Rose.png', rarity: 'ur', weight: 2.5 },
    { name: 'Echinacea', image: 'images/Echinacea.png', rarity: 'ssr', weight: 0.5 },
    { name: 'Punica', image: 'images/Punica.png', rarity: 'ssr', weight: 0.5 },
    { name: 'Flame lily', image: 'images/Flame lily.png', rarity: 'ur', weight: 2.5 },
    { name: 'Dianthus', image: 'images/Dianthus.png', rarity: 'sr', weight: 5 },
    { name: 'Abelia', image: 'images/Abelia.png', rarity: 'ur', weight: 2.5 },
    { name: 'Jade vine', image: 'images/Jade vine.png', rarity: 'ur', weight: 2.5 },
    { name: 'Philodend', image: 'images/Philodend.png', rarity: 'ur', weight: 2.5 },
    { name: 'Blue rose', image: 'images/Blue rose.png', rarity: 'sr', weight: 5 },
    { name: 'Gilbraltra campion', image: 'images/Gilbraltra campion.png', rarity: 'ur', weight: 2.5 },
    { name: 'Delphinium Morpho', image: 'images/Delphinium Morpho.png', rarity: 'sr', weight: 5 }, 
    { name: 'Sequoia', image: 'images/Sequoia.png', rarity: 'ssr', weight: 0.5 },
    { name: 'Barleria', image: 'images/Barleria.png', rarity: 'sr', weight: 5 },
    { name: 'Gustavia', image: 'images/Gustavia.png', rarity: 'sr', weight: 5 },
    { name: 'Barringtonia', image: 'images/Barringtonia.png', rarity: 'sr', weight: 5 },
    { name: 'Bruguiera', image: 'images/Bruguiera.png', rarity: 'sr', weight: 5 },
    { name: 'Cuphea', image: 'images/Cuphea.png', rarity: 'sr', weight: 5 }
];

let inventory = []; // ใช้สำหรับเก็บตัวละครที่ได้แสดงในช่องเก็บของ
let count = 0; // ตัวแปรเพื่อเก็บจำนวนครั้งที่สุ่ม
let isSpinning = false; // ตัวแปรเพื่อเช็คสถานะการหมุน

function generateCharacter() {
    if (isSpinning) return; // หยุดการทำงานหากมีการหมุนอยู่

    const weightedList = [];

    characters.forEach(character => {
        for (let i = 0; i < character.weight; i++) {
            weightedList.push(character);
        }
    });
    
    const button = document.getElementById('generate-button');
    button.disabled = true;
    isSpinning = true;

    spin();

    function spin() {
        let spinInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * weightedList.length);
            const selectedCharacter = weightedList[randomIndex];

            document.getElementById('character-image').src = selectedCharacter.image;
            document.getElementById('character-name').textContent = selectedCharacter.name;
        }, 100);

        setTimeout(() => {
            clearInterval(spinInterval);
            const selectedCharacter = weightedList[Math.floor(Math.random() * weightedList.length)];
            // แสดงผลลัพธ์ของตัวละครที่สุ่ม
            document.getElementById('character-image').src = selectedCharacter.image;
            document.getElementById('character-name').textContent = selectedCharacter.name;

            if (!isCharacterInInventory(selectedCharacter)) {
                showModal(selectedCharacter); // แสดง modal เฉพาะเมื่อไม่ได้มีใน inventory
                updateInventory(selectedCharacter);
            } else {
                // หากมีใน inventory แล้วไม่ต้องแสดง modal
                console.log(`คุณได้รับตัวละครที่มีอยู่แล้ว: ${selectedCharacter.name}`);
            }

            count++;
            updateCount();
            updateProgress();
            button.disabled = false;
            isSpinning = false;
        }, 1750);
    }
}

function showModal(character) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const modalCharacterImage = document.getElementById('modal-character-image');
    const modalCharacterName = document.getElementById('modal-character-name');

    modalMessage.textContent = `คุณได้รับตัวละคร: ${character.name}`;
    modalCharacterImage.src = character.image;
    modalCharacterName.textContent = `${character.name} (${character.rarity})`;
    modalCharacterName.className = ''; // รีเซ็ตคลาสก่อน
    modalCharacterName.classList.add(character.rarity);

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function updateInventory(character) {
    const inventoryDiv = document.getElementById('inventory');

    const itemDiv = document.createElement('div');
    itemDiv.className = 'inventory-item';
    itemDiv.innerHTML = `<img src="${character.image}" alt="${character.name}"><div class="${character.rarity}">${character.name}</div>`;

    inventoryDiv.appendChild(itemDiv);
    inventory.push(character); // เก็บเฉพาะตัวละครเท่านั้น

    updateProgress();
}

function isCharacterInInventory(character) {
    return inventory.some(c => c.name === character.name);
}

function updateCount() {
    document.getElementById('count').textContent = `จำนวนครั้งที่สุ่ม: ${count}`;
}

function updateProgress() {
    const totalCharacters = characters.length; // จำนวนตัวละครทั้งหมด
    const uniqueCharacters = new Set(inventory.map(c => c.name)).size; // จำนวนตัวละครที่มีใน inventory

    document.getElementById('progress').textContent = `ตัวละครที่ได้รับ: ${uniqueCharacters}/${totalCharacters}`;
}
