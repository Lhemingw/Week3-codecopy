class StarTrek {
    constructor (name) {
        this.name = name
    }
    describe() {
        return `${this.name}`;
        }
    }     
class EnterpriseShipTeam {
    constructor(name) {
        this.name =name;
        this.StarTrek = [];
    }
    addStarTrek(StarTrek) {
        if (startrek instanceof StarTrek) {
          this.StarTrek.push(StarTrek);
          console.log(`StarTrek member ${StarTrek.name} added to ${this.name}`);
        } else {
            throw new Error(`you can only add an instance of StarTrek.`);
          
        }
    }
    describe() { //For the Enterprise
        return `${this.name} has ${this.StarTrek.length} players.`;
        }
        }
        class Menu { // what drives the application and our choices 
        constructor() {
        this.enterpriseShipTeam = [];
        this.selectedEnterpriseShipTeam = [] // manage one team at a time
        }
        start() { // entry point to application
            let selection = this.showMainMenuOptions(); 
            while (selection != 0) {
            switch(selection) {
            case '1' :
            this.createEnterpriseShipTeam();
            break;
            case '2' :
            this.viewEnterpriseShipTeam();
            break;
            case '3' :
            this.redShirtEnterpriseShipTeam();
            break;
            case '4' :
            this.displayEnterpriseShipTeam();
            break;
            default:
            selection = 0;
            }
            selection = this.showMainMenuOptions();
                }
            alert('Goodbye!');
            }
        showMainMenuOptions() {
            return prompt(`
            0. exit
            1. create a new EnterpriseShipTeam
            2. view a EnterpriseShipTeam
            3. red shirt a EnterpriseShipTeam
            4. display all EnterpriseShipTeam
            `);
                }
        showEnterpriseShipTeamMenuOptions(EnterpriseShipTeamInfo) {
            return prompt(`
            0. back
            1. add a new EnterpriseShipTeam
            2. red Shirt a EnterpriseShipTeam
              `);
                    }
    displayEnterpriseShipTeam() {  //*** */
        let EnterpriseShipTeamString = '';
        for (let i = 0; i < this.enterpriseShipTeam.length; i++) {
            EnterpriseShipTeamString += i+ ') ' + this.enterpriseShipTeam[i].name + '\n';
        }
        alert(EnterpriseShipTeamString);  //****May need cap E */
        }
    createEnterpriseShipTeam() {
        let name = prompt('Enter name for new team: ');
        this.enterpriseShipTeam.push(new EnterpriseShipTeam(name));
        }
    viewEnterpriseShipTeam() {
        console.log(this.enterpriseShipTeam);
        let index = prompt("Enter the index of the enterprise team that you want to view:");
        console.log("Value of index:", index);
        if (index > -1 && index < this.enterpriseShipTeam.length) {
        this.selectedEnterpriseShipTeam = this.enterpriseShipTeam[index];
        console.log(`Enterprise Ship Team: ${this.selectedEnterpriseShipTeam.name}`);
        console.log(this.selectedEnterpriseShipTeam.describe());
        }else{
            console.log("Invalid index. Please try again.");
            let description = 'EnterpriseShipTeam: ' + this.selectedEnterpriseShipTeam.name + '\n';
            description += ' ' + this.selectedEnterpriseShipTeam.describe() + `\n`;
            for (let i = 0; i < this.selectedEnterpriseShipTeam.StarTrek.length; i++) {
            // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
            // + this.selectedTeam.players[i].position + '\n';
            description += i + ') ' + this.selectedTeam.players[i].describe() + '\n';
            }
                  //showEmployers() {
//           //     let employerString = '';
//           //     for (let i = 0; i < this.employers.length; i++) {
//           //         employerString += i + ') ' + this.employers[i].name + '\n';
//           //     }
//           //     alert(employerString);
//           // }
            
            let selection1 = this.showTeamMenuOptions(description);
            switch (selection1) {
            case '1' :
            this.createStarTrek();
            break;
            case '2' :
            this.redShirtStarTrek();
            }
               } // validate user input
            }
            redShirtEnterpriseShipTeam() {
                let index = prompt('Enter the index of the team that you wish to delete: ');
                if (index > -1 && index < this.enterpriseShipTeam.length) {
                this.enterpriseShipTeam.splice(index,1);
                }
        }
            createStarTrek() {
                let name = prompt('Enter name for new player: ');
                //let position = prompt('Enter position for new player: ');
                //this.selectedTeam.players.push(new Player(name, position));
                this.selectedEnterpriseShipTeam.addStarTrek(new StarTrek(name));
            }
            redShirtStarTrek() {
                let index = prompt('Enter the index of the player that you wish to delete: ');
                if (index > -1 && index < this.selectedEnterpriseShipTeam.StarTrek.length) 
                { this.selectedEnterpriseShipTeam.StarTrek.splice(index,1);
                    }
        }
}//end of loop
let menu = new Menu();
menu.start(); 


                                       
                           
               
        
    




