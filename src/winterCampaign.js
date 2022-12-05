import "@fortawesome/fontawesome-free/css/all.css"

export class winterCampaign {
    constructor({
        campaign = true} = {},) {

        this.campaign = this.initialise();
        this.campaign = this.handleState();
        this.campaign = this.createStyles();
    }

    initialise() {

        const body = document.getElementsByTagName("body")[0];
        body.setAttribute("id", "bodyWrapperWinterCampaign");

        const label = document.createElement('label');
        label.setAttribute("id", "labelInputWinterCampaign");
        
        const input = document.createElement('input');
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "InputWinterCampaign");
        input.setAttribute("class", "lightsOn");

        const span = document.createElement('span');
        span.innerHTML = 'ON';

        const bodyCopy = document.createElement('section');
        bodyCopy.setAttribute("id", "bulbWinterCampaign");

        const imageState1 = document.createElement('img');
        imageState1.setAttribute("id", "imageState1");
        imageState1.setAttribute("src", "https://www.joemedia.co.uk/uploads/2022/12/Component-2.png");

        const imageState2 = document.createElement('img');
        imageState2.setAttribute("id", "imageState2");
        imageState2.setAttribute("class", "hiddenWinterCampaign");
        imageState2.setAttribute("src", "https://www.joemedia.co.uk/uploads/2022/12/Component-1.png");

        const logo = document.createElement('img');
        logo.setAttribute("id", "logoWinterCampaign");
        logo.setAttribute("src", "https://www.joemedia.co.uk/uploads/2022/12/Irish_Government_Logo-1.png");
        

        document.getElementsByTagName("body")[0]
               .appendChild(label);
        document.getElementsByTagName("label")[0]
               .appendChild(input);
        document.getElementsByTagName("label")[0]
               .appendChild(span);
    
        document.getElementsByTagName("body")[0]
               .appendChild(bodyCopy);
        document.getElementsByTagName("section")[0]
               .appendChild(imageState1);
        document.getElementsByTagName("section")[0]
               .appendChild(imageState2);
        document.getElementsByTagName("body")[0]
               .appendChild(logo);

    };

    handleState() {
        document.getElementById("InputWinterCampaign").onclick = function() {  
            inputEvent();
        }; 
        
        function inputEvent() {

            const spanToggle = document.getElementsByTagName("span")[0];
            const imageState1 = document.getElementById("imageState1");
            const imageState2 = document.getElementById("imageState2");

            if(spanToggle.innerHTML == "ON") {
                spanToggle.innerHTML = "OFF";
                imageState1.classList.add('hiddenWinterCampaign');
                imageState2.classList.remove('hiddenWinterCampaign');
            } else {
                spanToggle.innerHTML = "ON";
                imageState1.classList.remove('hiddenWinterCampaign');
                imageState2.classList.add('hiddenWinterCampaign');
            }
        }
    }

    createStyles() {

        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        #bodyWrapperWinterCampaign {
            display: flex;
            align-items:center;
            justify-content: space-between;
            background-color: #dedede;
            margin: 10px;
            max-width: 1060px;
        }
        #bodyWrapperWinterCampaign * {
            font-family: 'Inter', sans-serif;
        }
        #bodyWrapperWinterCampaign img {
            max-width: 100%;
            height: auto;
        }
        #bulbWinterCampaign {
            display: flex;
            align-items:center;
            justify-content: center;
            position: relative;
            min-width: 600px;
            min-height: 140px;
            margin-left: 80px;
        }
        #bulbWinterCampaign img {
            position:absolute;
            transition:opacity 0.2s linear;
            width: 400px;
        }
        #labelInputWinterCampaign {
            position: relative;
            min-width: 150px;
            min-height: 75px;
            background: #494949;
            border-radius: 10px;
            border: 5px solid #000;
        }
        #labelInputWinterCampaign input {
            appearance: none;
        }
        #labelInputWinterCampaign span {
            position: absolute;
            top: 0;
            right: 0;
            width: 65px;
            height: 65px;
            background: #3AA8C1;
            font-weight: 700;
            color: #fff;
            border: 6px solid #494949;
            border-radius: 14px;
            cursor: pointer;
            transition: 0.5s;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #labelInputWinterCampaign input:checked ~ span{
            right: 75px;
        }
        #logoWinterCampaign {
            position: relative;
            width: 250px;
        }
        .hiddenWinterCampaign{
            opacity:0;   
        }
        @media(max-width:700px) {
            #bodyWrapperWinterCampaign {
                flex-direction: column;
                justify-content: center;
            }
            #labelInputWinterCampaign {
                top: 40px;
            }
            #bulbWinterCampaign {
                top: 60px;
                min-width: 375px;
                margin-left: 0;
            }

            #logoWinterCampaign {
                top:80px
            }
        }
        `.replace(/^\s+|\n/gm, '');
        document.head.appendChild(styleTag);
    };
}