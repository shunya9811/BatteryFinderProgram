
const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }]
;

const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }
];

class Battery{
    constructor(name,capacityAh,voltage,maxDraw,endVoltage){
        this.name = name;
        //�e�ʁiAh�j
        this.capacityAh = capacityAh;
        //�d���iV)
        this.voltage = voltage;
        //�ő���d�d���iA�j
        this.maxDraw = maxDraw;
        //�I�~�d���iV�j
        this.endVoltage = endVoltage;
    }

    //�I�~�d�����ɓd�r�������ł���d��
    maxPower(){
        return this.endVoltage * this.maxDraw;
    }

    //�d�͗e��
    powerCapacity(){
        return this.voltage * this.capacityAh;
    }

    //�󂯎�����������Ԃ����List�����
    createListEle(useTime){
        let element = document.createElement("li");
        element.classList.add("list-group-item","d-flex", "flex-wrap");

        let left = document.createElement("div");
        left.classList.add("pt-1", "col-6", "d-flex", "justify-content-start");
        left.innerHTML = this.name;

        let right = document.createElement("div");
        right.classList.add("col-6", "d-flex", "justify-content-end");
        right.innerHTML = "Estimate " + useTime.toFixed(1) + " hours";

        element.append(left,right);

        return element;
    }
};

// �o�b�e���[�N���X��z��ɒǉ�
const batteryList = [];
for (let bat of battery){
    batteryList.push(new Battery(bat["batteryName"], bat["capacityAh"], bat["voltage"], bat["maxDraw"], bat["endVoltage"]));
}

class Camera {
    constructor(brand, model, power){
        this.brand = brand;
        this.model = model;
        this.power = power;
    }

    createBrandEle(){
        let ele = document.createElement("option");
        ele.value = this.brand;
        ele.innerHTML = this.brand;
        return ele;
    }

    createModelEle(index){
        let ele = document.createElement("option");
        ele.value = index;
        ele.innerHTML = this.model;
        return ele;
    }       
}

//�J�����N���X��z��ɒǉ�
const cameraList = [];
for (let cam of camera){
    cameraList.push(new Camera(cam["brand"], cam["model"], cam["powerConsumptionWh"]))
}

//�o�b�e���[�𖼑O���Ƀ\�[�g
batteryList.sort(
    function(a, b){
        if (a.name > b.name) return 1;
        else return -1;
    }
)

//�����ݒ�
//step1
let brandSelection = document.getElementById("brand");

//�u�����h�f�t�H���g��ǉ�����
const defaultBrand = document.createElement("option");
defaultBrand.value = "default";
defaultBrand.innerHTML = "Brand Name";
brandSelection.append(defaultBrand);

//step2
const modelSelection = document.getElementById("model");
modelSelection.disabled = true;

//���f���f�t�H���g��ǉ�����
const defaultModel = document.createElement("option");
defaultModel.value = "default";
defaultModel.innerHTML = "Model";
modelSelection.append(defaultModel);

//step3
const powerInput = document.getElementById("power");
powerInput.disabled = true;

//step4
const batteryContainer = document.getElementById("batteryDiv");
const batlist = document.getElementById("batList");


//�o�b�e���[�f�t�H���g��ǉ�����
const defaultbattery = document.createElement("p");
defaultbattery.value = "default";
defaultbattery.innerHTML = "First, select your brand!";
batteryContainer.append(defaultbattery);




//�֐�
//step1
for (let i = 0; i < cameraList.length-1; i++){
    if (cameraList[i].brand === cameraList[i+1].brand) continue;
    brandSelection.append(cameraList[i].createBrandEle());
}
brandSelection.append(cameraList[cameraList.length-1].createBrandEle());

brandSelection.addEventListener("change", (event) => {
    setModelOption(event.target.value)
    setPowerCosumption(event.target.value)
    displayBatteryList(event.target.value)
});

//step2

//step4�ւ̃C�x���g�֐�
modelSelection.addEventListener("change",function() {displayBatteryList(brandSelection.value)});

function setModelOption(cameraBrand) {
    
    //�f�t�H���g��Ԃ�
    if (cameraBrand === "default") {
        modelSelection.disabled = true;
        modelSelection.append(defaultModel);
        return;
    }

    modelSelection.innerHTML = "";
    modelSelection.disabled = false;
    for (let i = 0; i < cameraList.length; i++) {
        if (cameraList[i].brand !== document.getElementById("brand").value) continue;
        modelSelection.append(cameraList[i].createModelEle(i));
    }
}

//step3

//step4�ւ̃C�x���g�֐�
powerInput.addEventListener("change",function(){ displayBatteryList(brandSelection.value)});

function setPowerCosumption(cameraBrand){

    //�f�t�H���g��Ԃ�
    if (cameraBrand == "default") {
        powerInput.disabled = true;
        return;
    }

    powerInput.disabled = false;
}

//step4

function displayBatteryList(cameraBrand){
    
    //�f�t�H���g��Ԃ�
    if (cameraBrand == "default") {
        batlist.innerHTML = "";
        batteryContainer.append(defaultbattery);
        return;
    }

    //inputPower�����̒l�̏ꍇ
    if (parseInt(powerInput.value) < 0) {
        batlist.innerHTML = "The value must be greater than or equal to zero.";
        alert("The value must be greater than or equal to zero.");
        return;
    }

    defaultbattery.remove();
    batlist.innerHTML = "";
    let totalPower = cameraList[parseInt(modelSelection.value)].power + parseInt(powerInput.value);

    for (let bat of batteryList){
        if (bat.maxPower() >= totalPower){
            let useTime = Math.round(bat.powerCapacity() / totalPower * 10) / 10;
            batlist.append(bat.createListEle(useTime));
        }
    }

    if (batlist.innerHTML == ""){
        batlist.innerHTML = "No matching battery exists."
    }
}

console.log(target)