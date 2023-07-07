//Make menu of Next Gen charactors
//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
    //Use at least one array.
    //Use at least two classes.
    //Your menu should have the options to create, view, and delete elements.
class NextGen {
    constructor(names, rank) {
        this.name = names;
        this.rank = rank;    
    }
//We start with the NextGen class, and names and rank.
//describe method just to print out information about our player
    describe() {
        return `${this.names} is assigned ${this.rank}`;
    }

}
//We create the ship as a team as in the video. which hold the array that holds all the characters
//so when we create a new ship we will have a blank array, we will do that in the constructor
class Enterprise {
    constructor() {
        this.names = [];
        this.rank;
    }

    //Write addName that will take a new name. instanceof operator make sure it it a NextGen
    addName(names){
        if (names instanceof NextGen) {
            this.names.push(names);
        } else {
            throw newError (`you can only add an instance of argument is not a names a name: ${names}`);
        }
    }  

        //Does what the top describe does
        describe(){
            return `Enterprise has ${this.names.length} has ${this.rank.length} names.`;
        }
    }
    //Create menu class what the menu does, how many NextGen we have and rank. Drive app, and sub menus to add members

class Menu { 
    constructor(){
    this.enterprise = new Enterprise() 
    this.selectedNames = null;
    }
    start() {
        let selection =this.showMainMenuOptions();
            console.log("prompt:", selection);
        while (selection != 0){
                selection = this.showMainMenuOptions();
            switch(selection){
                case "1":
                    this.createEnterprise();
                    break;
                case "2":
                    this.viewNextGen();
                    break;
                case "3":
                    this.redShirtNextGen();
                    break;
                default:
                    selection = 0;    
            }
            selection = this.showMainMenuOptions();
        }
        alert(`Goodbye!`);
    }
        //valadate the user input, users are unprededectable
        showMainMenuOptions() {
            return prompt(`Enter your selection, Main Menu:\n 
             1. Create New NextGen Character\n
             2. View all NextGen Character\n
             3. Red Shirt a NextGen Character\n
             0. Exit\n  
            `);
        }

        // Added Enterprise Menu Options****** I think this is what I need
    enterpriseMenuOptions(enterpriseInfo) {
            return prompt(" Enterprise Menu" + "\n" +
            "1. Create New Enterprise Member" + "\n" + 
            "2. Red Shirt Enterprise Member" + "\n" +
            "0. Back\n" + enterpriseInfo
            ); 
        }
    //displayCharacterMenu(){
            //let enterpriseString =``;
            //for (let i = 0; index < this.enterprise.length; index++) {
                //enterpriseString += i+ `)` + this.enterprise[i].name + `\n`;  
            //}
                //alert(enterpriseString);
    //}
    createEnterpriseCharacterMenu() {
        let enterpriseString =``;
            for (let i = 0; index < this.enterprise.length; index++) {
                enterpriseString += i+ `)` + this.enterprise[i].name + `\n`;  
            }
        //alert(enterpriseString);
            console.log("Create a NextGen Character");
            const name = prompt("Enter the character name:");
            const rank = prompt("Enter the character rank:");
            const nextGen = new NextGen(name, rank);
            this.enterprise.addName(nextGen);
            console.log(`NextGen character ${name} created successfully!\n`);
        }

             //alert(enterpriseString);
            //add description of all NextGen
    createEnterprise() {
        console.log("Creating Enterprise...");
    }
    viewEnterprise() {
            console.log("View NextGen Characters");
            const characters = this.enterprise.names;
            console.log(characters); //added new
        }
    redShirtEnterprise(){
            console.log("Red Shirt a NextGen character");
            let index = prompt(`Enter the index of the character you wish to Red Shirt:`);
            if (index > -1 && index < this.names.length) {
             this.names.splice(index1);
            }
        
        let selection =this.enterpriseMenuOptions(descriptions);
            while (selection != 0){
                selection = this.showMainMenuOptions();
                switch (selection ){
                    case 1:
                    this.createNextGenMenu();//or is this Enterprise
                    break;
                    case 2:
                    this.redShirtNexGenMenu();
                 }      
            
            }
    }

        createNextGen() {
        console.log("Creating NextGen....");
            let name = prompt(`Enter name of New NextGen:`);
            let rank = prompt (`Enter rank of New NextGen:`);
            this.selectedEnterprise.NextGen.push(new NextGen(name, rank));
        }

        redShirtNextGen() {
            let index = prompt(`Enter the index of the NextGen you wish to red shirt:`);
            if( index >-1 && index < this.selectedEnterprise.NextGen.length); {
            this.selectedEnterprise.NextGen.splice(index, -1);
            }    
        }
}
    let menu =new Menu(); //var of the instance of the main menu, this runs first
    menu.start()

    //const redShirt = this.enterprise.names;  //or do I need what my show create character menu looks like?
  

//I had start() here
    