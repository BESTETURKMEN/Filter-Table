const tableInfos = [
    {
        id: "1",
        name: "Natalie",
        country: "Germany",
    },
    {
        id: "2",
        name: "Lisa",
        country: "England",
    },
    {
        id: "3",
        name: "John",
        country: "America",
    },
    {
        id: "4",
        name: "Slvia",
        country: "Italia",
    },
    {
        id: "5",
        name: "Nyod",
        country: "Poland",
    },

]

const container = document.getElementsByClassName("container")[0];
const table = document.createElement("table");
table.id = "table";

const thead = document.createElement("thead");
const header = document.createElement("tr");//1
header.className = "header";
const namee = document.createElement("td");
namee.innerHTML = "Name";
const country = document.createElement("td");
country.innerHTML = "Country";

header.appendChild(namee);
header.appendChild(country);
thead.appendChild(header);
table.appendChild(thead);
container.appendChild(table);


const NameList = tableInfos.map((item) => {
    const trA = document.createElement("tr"); //2
    const td1 = document.createElement("td");
    td1.innerHTML = item.name;
    const td2 = document.createElement("td");//3
    td2.innerHTML = item.country;

    table.appendChild(trA);
    trA.appendChild(td1);
    trA.appendChild(td2);
}
)


const HandleClick = () => {
    const inputValue = document.getElementById("myInput").value;
    const trElement = document.getElementsByClassName("tr");

    const listToShow = tableInfos.filter((item) => item.name.toLowerCase().includes(inputValue) || item.country.toLowerCase().includes(inputValue));


    const table = document.getElementById("table");
    table.innerHTML = '';
    table.style.height = "71.8px";


    listToShow.map((item) => {
        const thead = document.createElement("thead");
        const header = document.createElement("tr");//1
        header.className = "header";
        const namee = document.createElement("td");
        namee.innerHTML = "Name";
        const country = document.createElement("td");
        country.innerHTML = "Country";
        const trElement = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerHTML = item.name;
        td1.style.height = "71.8px";

        const td2 = document.createElement("td");
        td2.innerHTML = item.country;
        td2.style.height = "71.8px";

        header.appendChild(namee);
        header.appendChild(country);
        thead.appendChild(header);
        table.appendChild(thead);
        container.appendChild(table);
        trElement.appendChild(td1);
        trElement.appendChild(td2);
        table.appendChild(trElement);
    });
}









