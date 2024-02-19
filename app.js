const {default: axios} = require("axios")

const url = 
"https://api.telegram.org/bot6712848372:AAGNwQSSjWjh77wLCQXcR_iFwmvUplZFkS8/sendMessage?parse_mode=markdown&chat_id=5658697363&text=TEST GOBLOK"


async function sendMessage() {
    try {
        while (true) {
            await axios.get(url)
                .then((respone) => {
                    if (respone.status == 200) {
                        // Console.log bisa di ubah dengan respone dan "Teks" Bebs
                        console.log("BOM DI KIRIM????")
                    }
                    
                })

        }
    } catch (error) {
        console.log("API Down!!!!")
        sendMessage();
    }
}

sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();