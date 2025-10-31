// ⚠️ 重要：請將下面的 YOUR_GROQ_API_KEY 替換成你的真實 Groq API Key
const API_KEY = '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';
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// 壽豐景點資料庫（14個景點）
const shoufengData = {
    spots: [
        // 簡單景點
        {
            name: '壽豐火車站',
            difficulty: '簡單',
            description: '壽豐車站位於花蓮縣壽豐鄉，為臺灣鐵路公司臺東線的鐵路車站，根據2024年資料，本站每日旅運量約為697，在台鐵各站中排行第155名',
            activities: '拍照打卡、看火車進站',
            tips: '建議搭火車來訪更有感覺，早上11點前可以去附近的壽豐早餐吃早餐',
            route: '文化體驗'
        },
        {
            name: '豐田火車站',
            difficulty: '簡單',
            description: '豐田車站位於花蓮縣壽豐鄉，為臺灣鐵路公司臺東線的鐵路車站，目前車站等級為簡易站，根據2024年資料，本站每日旅運量約為86[2]，在台鐵各站中排行第209名',
            activities: '車站拍照、周邊散步',
            tips: '一出站就到五味屋，豐田景點彼此都很近，走路可以',
            route: '文化體驗'
        },
        {
            name: '考古博物館',
            difficulty: '簡單',
            description: '位於臺灣花蓮縣壽豐鄉豐山村，為花蓮縣級考古博物館，前身為豐田市場翻新整建，館內展出史前玉文化的原料區豐田玉礦區，並鄰近支亞干遺址、重光遺址等史前大型玉作坊遺址，於2021年1月24日開館，館藏及展品以花蓮地區的考古遺址文物為收藏基礎，並以花東地區距今3500年前獨特玉文化產業為展覽核心，截至2021年為止，該館館藏計約80萬件',
            activities: '參觀體驗原住民文化和考古文化',
            tips: '展館為收費進場參觀，全票50元、優待票25元、團體票30元，開放時間為週三至週日上午09:30-下午5:00止（閉館前30分鐘停止入館），每週一至週二固定休館，國定假日另行公告',
            route: '文化體驗'
        },
        {
            name: '五味屋',
            difficulty: '簡單',
            description: '孩子們經營的公益二手商店，充滿教育意義',
            activities: '二手商品尋寶、支持在地教育、與孩子互動',
            tips: '每週六日9:00-16:00。暑假(7/3~8/31)開店時間為每週四、五、六、日、一 ，週間營業時間為10：00-16：00，週末營業時間為 9:00-16:00！可以捐贈二手物品，記得帶現金，不可以拍照照到小朋友',
            route: '文化體驗'
        },
        {
            name: '豐田食號',
            difficulty: '簡單',
            description: '豐田小鎮上和生活有關的複合式共享空間；也是「三季甜點、豐田食號和旅貓」，集一切日常美好一起好好吃飯、不急不緩過著在地的小日子',
            activities: '甜點、咖啡、輕食、午餐、典藏生活選物',
            tips: '週六、日 11:30-17:00',
            route: '特色體驗'
        },
        
        // 普通景點
        {
            name: '立川漁場',
            difficulty: '普通',
            description: '位在壽豐的立川漁場，利用天然湧泉養殖體型飽滿、味道鮮美的黃金蜆，並設立了文化生態館、蜆之館、體驗池、餐廳等，不僅能夠讓人認識黃金蜆的一生、養殖的過程之外，還能親自下水體驗「摸蜊仔兼洗褲」的樂趣，餵食養殖的魚群，是一個非常受歡迎的親子同樂的景點',
            activities: '摸蜆體驗、品嚐蜆料理、生態教育',
            food: '黃金蜆、蜆精、蜆丸、炒蜆',
            tips: '記得帶換洗衣物！免費參觀、摸蜆體驗每200元，5歲以下不收費，僅需付陪同大人的費用、蜆殼DIY每人200元，需於3天事先預約',
            route: '特色體驗'
        },
        {
            name: '碧蓮寺（豐田神社）',
            difficulty: '普通',
            description: '碧蓮寺的前身是「豐田神社」，為百年興建的古寺，雖然原有神社建築已消失，取而代之的是一棟中國式的廟宇，然而「鳥居」、「參拜道」、「石燈」，以及大殿門前的「狛犬」等遺跡，正娓娓述說著新舊文化的相濡滋長，在今豐裡村中山路、民權街口有座高約10公尺，寬6公尺，寫有「碧蓮寺」的鳥居，這是昔日「豐田神社」三座鳥居中僅存的一座，從這座鳥居沿著長約一公里的參拜道走至民權街底，即是「碧蓮寺」',
            activities: '參拜、欣賞日台混合建築',
            tips: '需要爬階梯，下午光線最美，保持安靜尊重宗教場所',
            route: '文化體驗'
        },
        {
            name: '雲山水',
            difficulty: '普通',
            description: '雲山水植物農場被譽為花蓮祕境景點，走入雲山水就像是一秒抵達歐洲鄉村，大片翠綠的草皮、水天一色的夢幻湖、茂密的落羽松森林和傾倒牛奶般的跳石瀑布，如置身於夢境天堂般的自然景色，讓人一眼望去便能掃除心中的所有煩惱。由於雲山水種植了多種不同的花草樹木，因此雲山水的景色也會隨著四季變化而有不同的美，尤其秋冬之際是賞落羽松轉金黃和紅棕色的最佳時節',
            activities: '參觀、散步、拍照、騎腳踏車',
            tips: '門口租借腳踏車或電動車附贈門票',
            route: '自然生態'
        },
        {
            name: '理想大地星巴克',
            difficulty: '普通',
            description: '星巴克花蓮理想門市像從童話故事裡走出來的夢幻小屋，隨著季節變化，有落羽松相伴，湖面倒影隨著一日的光線變化，如同風景畫一般，讓人有種置身不是現實世界的感覺',
            activities: '參觀、稍作休息、享用星巴克飲品和食物',
            tips: '免費參觀！有專用停車場',
            route: '自然生態'
        },
        
        // 困難景點
        {
            name: '樹湖步道',
            difficulty: '困難',
            description: '位在壽豐鄉的樹湖村的「樹湖瀑布」，座落在隱密的山林之中，因在樹湖村荖山，所以當地居民多稱為「荖山瀑布」，從臺9線經豐鄉豐田225.5公里處可見樹湖社區的長形水泥指標，右轉進入社區往樹湖橋（荖山橋）的方向走，沿途會看見道路旁種植的櫻花樹，每到花季，山頭數百棵嫣紅的櫻花齊力綻放，映襯在蒼鬱的綠色山林，更顯現出櫻花的絢麗',
            activities: '漫步爬山、賞櫻、拍照',
            tips: '建議騎車到山下再爬上去',
            route: '自然生態'
        },
        {
            name: '豐盛書店',
            difficulty: '困難',
            description: '豐盛書店，2024年12月1日對外營業的花蓮獨立書店，位於台九丙線，鯉魚潭尾的荖溪旁阿美族Rinahem部落',
            activities: '閱讀、購買書籍、享用飲品',
            tips: '附近沒有專屬停車場',
            route: '特色體驗'
        },
        {
            name: '白鮑溪',
            difficulty: '困難',
            description: '清澈溪流秘境，保持原始自然風貌',
            activities: '溪流戲水、溯溪、生態觀察',
            tips: '玩水記得帶泳衣，雨天或颱風後不要去',
            route: '自然生態'
        },
        {
            name: '鯉魚潭',
            difficulty: '困難',
            description: '花蓮最大的內陸湖泊，面積104公頃',
            activities: '環潭騎車、划船、賞螢（4-5月）、湖畔咖啡',
            food: '活魚料理、湖畔餐廳',
            tips: '建議租腳踏車環湖約1小時，4-5月螢火蟲季必訪',
            route: '自然生態'
        },
        {
            name: '豐春冰菓室',
            difficulty: '困難',
            description: '只有賣甘蔗冰，配料包含「紅豆、綠豆、花豆、芋頭、鳳梨、仙草」，選2種配料價格為60元',
            activities: '夏季限定享用冰品',
            tips: '夏季限定',
            route: '特色體驗'
        }
    ],
    
    routes: {
        halfDay: '半日遊建議：豐田火車站（30分鐘）→ 考古博物館（1.5小時）→ 豐田食號（1小時）',
        fullDay: '一日遊建議：樹湖步道（2小時）→ 午餐 → 立川漁場（1.5小時）→ 理想大地星巴克（1小時）→ 五味屋（1小時）→ 考古博物館（1.5小時）',
        culture: '文化路線：豐田火車站 → 五味屋 → 考古博物館→ 碧蓮寺',
        nature: '自然路線：壽豐火車站 → 雲山水 → 理想大地星巴克→白鮑溪 → 鯉魚潭 → 樹湖步道',
        special: '特色路線：豐田火車站 → 豐田食號 → 豐春冰菓室 → 豐盛書店 → 立川漁場',
        photo: '最適合拍照：鯉魚潭（湖景）、雲山水（落羽松）、壽豐火車站（復古風）、理想大地星巴克(童話小屋) 、碧蓮寺（神社遺跡）',
        food: '美食推薦：豐春冰菓店（甘蔗冰）、立川漁場（黃金蜆料理）、鯉魚潭周邊（活魚料理）、豐田食號(甜點、咖啡、輕食、午餐) '
    },
    
    statistics: {
        total: 14,
        easy: 5,
        normal: 4,
        hard: 5
    }
};

// 建立系統提示詞
function createSystemPrompt() {
    return `你是「壽豐尋寶巴」的專屬 AI 旅遊助手，負責協助遊客規劃花蓮壽豐鄉的旅遊行程。

【你的角色】
- 親切、熱情的在地嚮導
- 用輕鬆、活潑的語氣對話
- 適時使用 emoji 讓對話更生動（但不要過度使用）

【壽豐景點資訊】
壽豐鄉共有 14 個精選景點，分為三大路線：
1. 自然生態路線（5個景點）：樹湖步道、理想大地星巴克、白鮑溪、鯉魚潭、雲山水
2. 文化體驗路線（5個景點）：壽豐火車站、豐田火車站、碧蓮寺、考古博物館、五味屋
3. 特色體驗路線（4個景點）：豐春冰菓店、豐盛書店 、立川漁場、豐田食號

景點難度分類：
- 簡單景點（5個）：壽豐火車站、豐田火車站、考古博物館、五味屋、豐田食號
- 普通景點（4個）：立川漁場、碧蓮寺、理想大地星巴克、雲山水
- 困難景點（5個）：樹湖步道、豐盛書店、白鮑溪、鯉魚潭、豐春冰菓室 

詳細景點資訊：
${JSON.stringify(shoufengData.spots, null, 2)}

推薦路線：
${JSON.stringify(shoufengData.routes, null, 2)}

【回答原則】
1. 簡潔明瞭：回答控制在 100-200 字內
2. 具體實用：給出明確的建議和資訊
3. 在地特色：突出壽豐的獨特魅力
4. 友善互動：鼓勵遊客提問和探索
5. 路線規劃：根據時間（半日/一日）、興趣（自然/文化/特色）推薦景點

【回答格式】
- 推薦景點時：說明特色 + 為什麼推薦 + 實用建議
- 路線規劃：給出具體順序和時間建議
- 美食推薦：結合景點一起介紹
- 難度提醒：困難景點要提醒交通或體力需求

現在請用這個角色來回答遊客的問題！`;
}

// 發送訊息函數
async function sendMessage() {
    const input = document.getElementById('userInput');
    const messagesDiv = document.getElementById('chatMessages');
    const sendBtn = document.getElementById('sendBtn');
    const userMessage = input.value.trim();
    
    if (!userMessage) return;
    
    // 檢查 API Key
    if (API_KEY === 'YOUR_GROQ_API_KEY' || API_KEY === '填入你的GROQ的密鑰') {
        alert('⚠️ 請先設定你的 Groq API Key！\n\n請編輯 chat.js 檔案，將「填入你的GROQ的密鑰」替換成你的真實 API Key。');
        return;
    }

    // 隱藏快速問題按鈕
    const quickQuestions = document.getElementById('quickQuestions');
    if (quickQuestions) {
        quickQuestions.style.display = 'none';
    }

    // 顯示用戶訊息
    addUserMessage(userMessage);
    input.value = '';
    sendBtn.disabled = true;

    // 顯示載入動畫
    const typingId = showTypingIndicator();

    try {
        // 呼叫 Groq API
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile', // Groq 最好的免費模型
                messages: [
                    {
                        role: 'system',
                        content: createSystemPrompt()
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        // 移除載入動畫
        removeTypingIndicator(typingId);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('API 錯誤詳情:', errorData);
            throw new Error(`API 錯誤：${response.status}`);
        }

        const data = await response.json();
        console.log('API 回應:', data);
        
        // 顯示 AI 回應
        if (data.choices && data.choices[0] && data.choices[0].message) {
            const aiResponse = data.choices[0].message.content;
            addAIMessage(aiResponse);
        } else {
            addAIMessage('抱歉，我現在無法回答，請稍後再試 😅');
        }

    } catch (error) {
        console.error('錯誤:', error);
        removeTypingIndicator(typingId);
        
        let errorMessage = '哎呀！發生錯誤了 😢\n\n';
        if (error.message.includes('API 錯誤: 400')) {
            errorMessage += '請求格式錯誤。請檢查 API 設定。';
        } else if (error.message.includes('API 錯誤: 401')) {
            errorMessage += 'API Key 無效或已過期。\n請重新申請 Groq API Key。';
        } else if (error.message.includes('API 錯誤: 429')) {
            errorMessage += '請求太頻繁，請稍後再試。';
        } else if (error.message.includes('Failed to fetch')) {
            errorMessage += '網路連線有問題，請檢查網路設定。';
        } else {
            errorMessage += `錯誤訊息：${error.message}`;
        }
        
        addAIMessage(errorMessage);
    }

    sendBtn.disabled = false;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 顯示用戶訊息
function addUserMessage(message) {
    const messagesDiv = document.getElementById('chatMessages');
    const time = getCurrentTime();
    
    const messageHTML = `
        <div class="message-group user-group">
            <div class="messages">
                <div class="message user-message">
                    <div class="message-content">${escapeHtml(message)}</div>
                    <span class="message-time">${time}</span>
                </div>
            </div>
        </div>
    `;
    
    messagesDiv.insertAdjacentHTML('beforeend', messageHTML);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 顯示 AI 訊息
function addAIMessage(message) {
    const messagesDiv = document.getElementById('chatMessages');
    const time = getCurrentTime();
    
    // 將換行符號轉換為 <br>
    const formattedMessage = message.replace(/\n/g, '<br>');
    
    const messageHTML = `
        <div class="message-group ai-group">
            <div class="avatar-small">
                <i class="fas fa-robot"></i>
            </div>
            <div class="messages">
                <div class="message ai-message">
                    <div class="message-content">${formattedMessage}</div>
                    <span class="message-time">${time}</span>
                </div>
            </div>
        </div>
    `;
    
    messagesDiv.insertAdjacentHTML('beforeend', messageHTML);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 顯示載入動畫
function showTypingIndicator() {
    const messagesDiv = document.getElementById('chatMessages');
    const id = 'typing-' + Date.now();
    
    const typingHTML = `
        <div class="message-group ai-group" id="${id}">
            <div class="avatar-small">
                <i class="fas fa-robot"></i>
            </div>
            <div class="messages">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        </div>
    `;
    
    messagesDiv.insertAdjacentHTML('beforeend', typingHTML);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    return id;
}

// 移除載入動畫
function removeTypingIndicator(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}

// 快速問題功能
function askQuickQuestion(question) {
    const input = document.getElementById('userInput');
    input.value = question;
    sendMessage();
}

// 獲取當前時間
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// HTML 跳脫函數（防止 XSS 攻擊）
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Enter 鍵發送訊息
document.getElementById('userInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// 頁面載入完成後的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('壽豐尋寶巴 AI 助手已準備就緒！');
    console.log('使用 Groq API (llama-3.3-70b-versatile)');
    console.log('景點資料庫已載入：14個景點');
    
    // 自動聚焦輸入框
    const input = document.getElementById('userInput');
    if (input) {
        input.focus();
    }
});
