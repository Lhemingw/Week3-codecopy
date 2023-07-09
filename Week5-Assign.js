//Make menu of Next Gen charactors
//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
    //Use at least one array.
    //Use at least two classes.
    //Your menu should have the options to create, view, and delete elements.
class NextGen {
    constructor(name, rank) {
        this.name = name;
        this.rank = rank;    
    }
//We start with the NextGen class, and names and rank.
//describe method just to print out information about our player
    describe() {
        return `${this.name} is assigned ${this.rank}`;
    }

}
//We create the ship as a team as in the video. which hold the array that holds all the characters
//so when we create a new ship we will have a blank array, we will do that in the constructor
class Enterprise {
    constructor() {
        this.name = [];
        this.rank;
    }

    //Write addName that will take a new name. instanceof operator make sure it it a NextGen
    addName(name){  //do I need to change names to name?
        if (name instanceof NextGen) {
            this.name.push(name);
        } else {
            throw newError (`you can only add an instance of argument is not a names a name: ${names}`);
        }
    }  

        //Does what the top describe does
        describe(){
            return `Enterprise has ${this.name.length} has ${this.rank.length} names.`;
        }
    }
    //Create menu class what the menu does, how many NextGen we have and rank. Drive app, and sub menus to add members

class Menu { 
    constructor(){
    this.enterprise = new Enterprise() 
    this.selectedNames = null;
    }
        //drives our application & the choices. Initialize our teams which itself is an array of teams
        //becuase we have multiple teams inside this app.  Variable for what ever team we have selected, because when we are managing teams
        //We will be managing one team at a time.  We want to know which team is selected.
    start() {
        //let selection;
        let selection =this.showMainMenuOptions();  //Using methods that do not exist yet,                                             
            // //fixed prompt issue//and to build out our menu, going to implement those methods, this is called top down.
        while (selection != 0){  //The selection is a variable we're going to use to get user input of what option in our menu
            console.log("prompt:", selection); 
                selection = this.showMainMenuOptions();  //has the user selected, this method here is going to return the selection the user gives us                                               
            switch(selection){
                case "1":
                    this.createEnterpriseCharacterMenu();
                    break;
                case "2":
                    this.viewNextGen(); //I had viewNextGen here, I think Enterprise needs to go here, 
                    break;  //viewNexGen is not a function, but Enterprise (the team, or ship in this case is)
                case "3":
                    this.redShirtNextGen();
                    break;
                case "4":
                    this.createEnterprise();
                    break;
                default:
                    selection = 0;   //select anything else, we set it to 0.   Outside of our switch, we get the selection at the beginning 
                    //We also want to get the selection again while we're still inside, so it keeps looping as long as we do not select zero or select something other than 3
            }
            selection = this.showMainMenuOptions();  //flow of our menu options
        }
        alert(`Goodbye!`);
    }
        //valadate the user input, users are unprededectable, implement the methods
        showMainMenuOptions() {
            return prompt(`Enter your selection, Main Menu:\n 
             1. Create New NextGen Character\n
             2. View all NextGen Character\n
             3. Red Shirt a NextGen Character\n
             4. Create Enterprise Team\n
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


    //displayEnterpriseCharacterMenu(){  //this is displayTeams
            //let enterpriseString =``;
            //for (let i = 0; index < this.enterprise.length; index++) {
                //enterpriseString += i+ `)` + this.enterprise[i].name + `\n`;  
            //}
                //alert(enterpriseString)
    //}
    createEnterpriseCharacterMenu() {
        let enterpriseString =``;
            for (let i = 0; i< this.enterprise.length; i++) {  //create a blank string iterate through our teams grab each team 
                enterpriseString += i+ `)` + this.enterprise[i].name + `\n`;  //and then get the name for that specific team and then add a new line to that 
            }
    
        //alert(enterpriseString);  //outside of our for loop that way we will be able to see all the teams
        //what do I need this for?
            console.log("Create a NextGen Character");
            const name = prompt("Enter the character name:");
            const rank = prompt("Enter the character rank:");
            const nextGen = new NextGen(name, rank);
            this.enterprise.addName(nextGen);
            console.log(`NextGen character ${name} created successfully!\n`);
    }

             //alert(enterpriseString);
            //add description of all NextGen. Untill I add switch statment it will not do anything
    createEnterprise() {
        console.log("Creating Enterprise...");
        let selection = this.enterpriseMenuOptions();
        switch (selection) {
            case "1":
                this.createEnterprise();
                break;
            case "2":
                this.redShirtEnterprise();
                break;
            default:
                selection = 0;
            
        }
        //return;--may take out 
    }
    
    viewEnterprise() {  //NEED HELP!!!
            console.log("View NextGen Characters");
            const characters = this.enterprise; //took out .names;
            console.log(enterprise.name); //added new, I had (characters) here change to current
            //if (index > -1 && <this.Enterprise.length) {
                let index = prompt ("Enter the index of the team that you want to view:");
                if (index > -1 && index < enterprise.names.length) {
                    const selectedEnterprise = Enterprise.names[index]; 
                    let description = `Enterprise:  + ${selectedEnterprise.name}\n`;
                    for (let i = 0; i < selectedEnterprise.NextGen.length; i++) {
                        description += `${i}) ${selectedEnterprise.NextGen[i].describe()}\n`;
                    }
                    console.log(description);
                        // this.selectedEnterprise.NextGen[i].name + `-`
                        // description += i + `)` +
                        // this.selectedEnterprise.NextGen[i].describe() + `\n`;
                        // this.selectedEnterprise.NextGen[i].rank
                    }
                }

                
                
        //         for (let i = 0; i < this.selectedEnterprise.NextGen.length; i++) {
        //             //description += i +`) `+
        //             this.selectedEnterprise.NextGen[i].name + `-`
        //             description += i + `)` +
        //             this.selectedEnterprise.NextGen[i].describe() + `\n`;
        //             this.selectedEnterprise.NextGen[i].rank
        //         }
                    
        // }
    
        
    redShirtEnterprise(){
            console.log("Red Shirt a NextGen character");
            let index = prompt(`Enter the index of the character you wish to Red Shirt:`);
            if (index > -1 && index < this.enterprise.names.length) {
             this.enterprisenames.splice(index1);
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
                 }      //The enterpriseMenuOptions() method should be called with enterpriseInfo parameter, 
                        //which is missing in the current code.
                        //The createNextGenMenu() and redShirtNexGenMenu() methods are referenced 
                         //but not defined. What to do with this info???
            
            }
    }
        // viewNextGen(){  ///Start here****** or work on Enterprise Team- show individual team.
        //     console.log("View NextGen Characters");
        //     const characters = this.enterprise.names;
        //     console.log(characters);
        //     let index = prompt ("Enter the index of the team that you want to view:");
        //     if (index > -1 && < this.Enterprise.length) {
        //         this.selectedEnterprise = this.Enterprise[index]; 
        //         let description = `Enterprise:` + this.selectedEnterprise.name + `\n`;
        //         description += ` ` + this.selectedEnterprise.NextGen.length; i++) {
        //             //description += i +`) `+
        //             this.selectedEnterprise.NextGen[i].name + `-`
        //              //+ this.selectedEnterprise.NextGen[i].rank + `\n`;
        //         }
        //     }
        // }
        createNextGen() {
        console.log("Creating NextGen....");
            let name = prompt(`Enter name of New NextGen:`);
            let rank = prompt (`Enter rank of New NextGen:`);
            this.selectedEnterprise.NextGen.push(new NextGen(name, rank));
        }

        redShirtNextGen() {
            let index = prompt(`Enter the index of the NextGen you wish to red shirt:`);
            if( index > -1 && index < this.selectedEnterprise.NextGen.length); 
            {this.selectedEnterprise.NextGen.splice(index, -1);
            }    
        }
}

    let menu =new Menu(); //var of the instance of the main menu, this runs first
    menu.start()

    //const redShirt = this.enterprise.names;  //or do I need what my show create character menu looks like?
  

        //I had start() here
// //********************************************* */
// showTeamMenuOptions(teamInfo) {
//     return prompt(`
//     0) back
//     1) add a new player
//     2) delete a player
//     -----------------
//     ${teamInfo}
//     `);
//     }
    
//     displayTeams() { //displayEnterprise
//     let teamString = '';
//     for (let i = 0; i < this.teams.length; i++) {
//     teamString += i+ ') ' + this.teams[i].name + '\n';
//     }
//     alert(teamString);
//     }
    
//     createTeam() { //createEnterprise
//     let name = prompt('Enter name for new team: ');
//     this.teams.push(new Team(name));
//     }
    
    
//     viewTeam() { //viewEnterprise
//     let index = prompt("Enter the index of the team that you want to view:");
//     if (index > -1 && index < this.teams.length) {
//     this.selectedTeam = this.teams[index];
//     let description = 'Team Name: ' + this.selectedTeam.name + '\n';
//     description += ' ' + this.selectedTeam.describe() + '\n ';
//     for (let i = 0; i < this.selectedTeam.players.length; i++) {
//     // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
//     // + this.selectedTeam.players[i].position + '\n';
//     description += i + ') ' + this.selectedTeam.players[i].describe() + '\n';
//     }
    
//     let selection1 = this.showTeamMenuOptions(description);
//     switch (selection1) {
//     case '1' :
//     this.createPlayer();
//     break;
//     case '2' :
//     this.deletePlayer();
//     }
//        } // validate user input
//     }
    
//     deleteTeam() {
//     let index = prompt('Enter the index of the team that you wish to delete: ');
//     if (index > -1 && index < this.teams.length) {
//     this.teams.splice(index,1);
//     }
//     }
    
//     createPlayer() {
//     let name = prompt('Enter name for new player: ');
//     let position = prompt('Enter position for new player: ');
//     //this.selectedTeam.players.push(new Player(name, position));
//     this.selectedTeam.addPlayer(new Player(name,position));
//     }
    
//     deletePlayer() {
//     let index = prompt('Enter the index of the player that you wish to delete: ');
//     if (index > -1 && index < this.selectedTeam.players.length) { this.selectedTeam.players.splice(index,1);
//     }
//        }
//     }
//     let menu = new Menu();
//     menu.start(); 
    
    