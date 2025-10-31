// 壽豐尋寶巴 多語言系統
const translations = {
    'zh-TW': {
        // === 通用 ===
        'app.title': '壽豐尋寶巴',
        'app.subtitle': '像尋寶一樣探索花蓮壽豐的美麗景點',
        'app.description': '探索花蓮壽豐之美',
        
        // === 導航 ===
        'nav.home': '主頁',
        'nav.map': '地圖',
        'nav.collection': '收藏',
        'nav.profile': '個人',
        'nav.spots': '景點地圖',
        'nav.ai': 'AI 助手',
        'nav.allSpots': '全部景點',
		'music.turnOn': '開啟音樂',
        'music.turnOff': '關閉音樂',
        
        // === 首頁 ===
        'home.title': '壽豐尋寶巴',
        'home.subtitle': '像尋寶一樣\n探索花蓮壽豐的美麗景點',
        'home.startAdventure': '開始冒險',
        'home.aiHelper': 'AI 助手',
        
        // === 創建角色 ===
        'character.title': '創建你的角色',
        'character.subtitle': '選擇頭像並取個好名字吧!',
        'character.selectAvatar': '選擇頭像',
        'character.inputName': '輸入名稱',
        'character.namePlaceholder': '你的冒險者名稱',
        'character.back': '返回',
        'character.start': '開始冒險',
        'character.alert': '請輸入你的名稱!',
        
        // === 遊戲主頁 ===
        'game.title': '遊戲主頁',
        'game.adventurer': '冒險者',
        'game.level': '等級',
        'game.exp': '經驗值',
        'game.selectRoute': '選擇你的冒險路線',
        'game.routeDesc': '探索壽豐的自然、文化與特色景點',
        'game.spots': '個景點',
        
        // === 路線 ===
        'route.nature': '自然生態',
        'route.culture': '文化體驗',
        'route.special': '特色體驗',
        'route.nature.title': '自然生態之旅',
        'route.nature.desc': '探索鯉魚潭、雲山水、白鮑溪等自然美景',
        'route.nature.spots': '5個景點:樹湖瀑布、雲山水、白鮑溪等',
        'route.culture.title': '文化體驗之旅',
        'route.culture.desc': '品味考古博物館、日式神社改建寺廟等文化底蘊',
        'route.culture.spots': '5個景點:壽豐火車站、豐田火車站等',
        'route.special.title': '特色體驗之旅',
        'route.special.desc': '享受在地美食、手作體驗與稀特活動',
        'route.special.spots': '4個景點:豐春冰菓店、豐盛書店、立川漁場等',
        
        // === 地圖/景點 ===
        'map.title': '景點地圖',
        'map.all': '全部',
        'map.collected': '已收藏',
        'map.uncollected': '未收藏',
        'map.difficulty.easy': '簡單',
        'map.difficulty.medium': '中等',
        'map.difficulty.hard': '困難',
        'map.checkIn': '簽到',
        'map.details': '詳細資訊',
        'map.notCollected': '尚未收藏',
        
        // === 景點詳情 ===
        'spot.info': '景點資訊',
        'spot.description': '景點介紹',
        'spot.address': '地址',
        'spot.openTime': '開放時間',
        'spot.tips': '遊覽建議',
        'spot.difficulty': '難度',
        'spot.exp': '經驗值',
        'spot.route': '路線',
        'spot.checkIn': '前往簽到',
        'spot.viewOnMap': '在地圖上查看',
        'spot.back': '返回',
		'spot.introduction':'景點介紹',
		'spot.detailInfo':'詳細資訊',
		'spot.travelTips':'旅遊小提示',
        
        // === 收藏頁面 ===
        'collection.title': '我的收藏',
        'collection.total': '總景點',
        'collection.spots': '個景點',
        'collection.empty': '還沒有收藏任何景點',
        'collection.emptyDesc': '快去探索壽豐的美麗景點吧!',
        'collection.goExplore': '開始探索',
        'collection.collectedAt': '收藏於',
		'collection.subtitle':'收集所有景點，成為壽豐探險大師！',
		'collection.collected':'已收集',
		
        
        // === 個人頁面 ===
        'profile.title': '個人資料',
        'profile.explorer': '探險家',
        'profile.collected': '已收集',
        'profile.exp': '經驗值',
        'profile.adventureDays': '冒險天數',
        'profile.achievements': '成就徽章',
        'profile.recentCollections': '最近收集',
        'profile.noCollections': '還沒有收集任何景點',
        'profile.resetProgress': '重置進度',
        'profile.aiAssistant': 'AI 助手',
        'profile.resetConfirm': '確定要重置所有進度嗎?此操作無法復原!',
        'profile.resetSuccess': '進度已重置!',
        
        // 成就名稱
        'achievement.firstSpot': '初探壽豐',
        'achievement.halfWay': '半程旅人',
        'achievement.master': '探險大師',
        'achievement.natureLover': '自然愛好者',
        'achievement.cultureExplorer': '文化探索者',
        'achievement.specialHunter': '特色獵人',

        // === 簽到頁面 ===
        'checkin.title': '景點打卡',
        'checkin.selectMethod': '選擇打卡方式',
        'checkin.scan': '掃描 QR Code',
        'checkin.scanDesc': '到達景點後掃描現場的 QR Code',
        'checkin.startScan': '開始掃描',
        'checkin.simulate': '模擬打卡',
        'checkin.simulateDesc': '開發測試用,直接解鎖景點',
        'checkin.simulateBtn': '模擬打卡',
        'checkin.scanHint': '將 QR Code 對準框內即可自動掃描',
        'checkin.noQRCode': '找不到 QR Code?',
        'checkin.noQRCodeDesc': '請確認景點是否已設置 QR Code 標示牌',
        'checkin.useSimulate': '使用模擬打卡',
        'checkin.success': '收集成功!',
        'checkin.congrats': '恭喜你收集了',
        'checkin.levelUpTo': '升級到',
        'checkin.viewCollection': '查看收藏',
        'checkin.continue': '繼續探索',
        'checkin.spotNotFound': '找不到景點資料!',
        'checkin.alreadyCollected': '你已經收集過這個景點了!',
        'checkin.wrongQRCode': '這不是壽豐尋寶巴的景點 QR Code!\n\n請掃描正確的景點 QR Code。',
        'checkin.noPlayerData': '找不到玩家資料!',

        
        // === AI 助手 ===
        'chat.title': 'AI 旅遊助手',
        'chat.subtitle': '問我任何關於壽豐旅遊的問題',
        'chat.placeholder': '輸入你的問題...',
        'chat.send': '發送',
        'chat.thinking': '思考中...',
        'chat.welcomeTitle': '👋 你好!我是壽豐旅遊助手',
        'chat.welcome1': '🗺️ 推薦景點和路線',
        'chat.welcome2': '🍜 在地美食建議',
        'chat.welcome3': '🚗 交通和住宿資訊',
        'chat.welcome4': '📸 拍照打卡地點',
        'chat.exampleQuestion': '有什麼推薦的景點?',
        
        // === QR Code 生成器 ===
        'qr.title': 'QR Code 生成器',
        'qr.subtitle': '為景點生成 QR Code',
        'qr.selectSpot': '選擇景點',
        'qr.generate': '生成 QR Code',
        'qr.download': '下載 QR Code',
        'qr.print': '列印',
        'qr.spotCode': '景點代碼',
        
        // === 按鈕 ===
        'btn.back': '返回',
        'btn.confirm': '確認',
        'btn.cancel': '取消',
        'btn.save': '保存',
        'btn.edit': '編輯',
        'btn.delete': '刪除',
        'btn.close': '關閉',
        'btn.viewMore': '查看更多',
        'btn.startNow': '立即開始',
        
        // === 訊息 ===
        'msg.loading': '載入中...',
        'msg.noData': '暫無資料',
        'msg.error': '發生錯誤',
        'msg.success': '操作成功',
        'msg.networkError': '網路錯誤,請檢查連線',
    },
    
    'en': {
        // === Common ===
        'app.title': 'Shoufeng Treasure Hunt',
        'app.subtitle': 'Explore the beautiful spots of Shoufeng, Hualien like a treasure hunt',
        'app.description': 'Discover the Beauty of Shoufeng, Hualien',
        
        // === Navigation ===
        'nav.home': 'Home',
        'nav.map': 'Map',
        'nav.collection': 'Collection',
        'nav.profile': 'Profile',
        'nav.spots': 'Spot Map',
        'nav.ai': 'AI Assistant',
        'nav.allSpots': 'All Spots',
		'music.turnOn': 'Turn On Music',
		'music.turnOff': 'Turn Off Music',
        
        // === Home ===
        'home.title': 'Shoufeng Treasure Hunt',
        'home.subtitle': 'Explore the beautiful spots of\nShoufeng, Hualien',
        'home.startAdventure': 'Start Adventure',
        'home.aiHelper': 'AI Assistant',
        
        // === Create Character ===
        'character.title': 'Create Your Character',
        'character.subtitle': 'Choose an avatar and pick a name!',
        'character.selectAvatar': 'Select Avatar',
        'character.inputName': 'Enter Name',
        'character.namePlaceholder': 'Your adventurer name',
        'character.back': 'Back',
        'character.start': 'Start Adventure',
        'character.alert': 'Please enter your name!',
        
        // === Game Home ===
        'game.title': 'Game Home',
        'game.adventurer': 'Adventurer',
        'game.level': 'Level',
        'game.exp': 'EXP',
        'game.selectRoute': 'Choose Your Adventure Route',
        'game.routeDesc': 'Explore nature, culture and special spots in Shoufeng',
        'game.spots': ' Spots',
        
        // === Routes ===
        'route.nature': 'Nature',
        'route.culture': 'Culture',
        'route.special': 'Special',
        'route.nature.title': 'Nature & Ecology Tour',
        'route.nature.desc': 'Explore Liyu Lake, Yunshan Shui, and natural wonders',
        'route.nature.spots': '5 Spots: Shuhu Waterfall, Yunshan Shui, Baibao Creek, etc.',
        'route.culture.title': 'Cultural Experience Tour',
        'route.culture.desc': 'Visit archaeological museums and historic temples',
        'route.culture.spots': '5 Spots: Shoufeng Station, Fengtian Station, etc.',
        'route.special.title': 'Special Experience Tour',
        'route.special.desc': 'Enjoy local cuisine, DIY activities and unique experiences',
        'route.special.spots': '4 Spots: Ice Shop, Bookstore, Fish Farm, etc.',
        
        // === Map/Spots ===
        'map.title': 'Spot Map',
        'map.all': 'All',
        'map.collected': 'Collected',
        'map.uncollected': 'Not Collected',
        'map.difficulty.easy': 'Easy',
        'map.difficulty.medium': 'Medium',
        'map.difficulty.hard': 'Hard',
        'map.checkIn': 'Check In',
        'map.details': 'Details',
        'map.notCollected': 'Not Collected Yet',
        
        // === Spot Details ===
        'spot.info': 'Spot Information',
        'spot.description': 'Description',
        'spot.address': 'Address',
        'spot.openTime': 'Opening Hours',
        'spot.tips': 'Tips',
        'spot.difficulty': 'Difficulty',
        'spot.exp': 'EXP',
        'spot.route': 'Route',
        'spot.checkIn': 'Go Check In',
        'spot.viewOnMap': 'View on Map',
        'spot.back': 'Back',
		'spot.introduction':'Introduction',
		'spot.detailInfo':'Details',
		'spot.travelTips':'Travel Tips',
        
        // === Collection ===
        'collection.title': 'My Collection',
        'collection.total': 'Total',
        'collection.spots': ' Spots',
        'collection.empty': 'No spots collected yet',
        'collection.emptyDesc': 'Start exploring beautiful spots in Shoufeng!',
        'collection.goExplore': 'Start Exploring',
        'collection.collectedAt': 'Collected at',
		'collection.subtitle':'Collect all the spots to become the Shoufeng Adventure Master!',
		'collection.collected':'Collected',
        
       // === Profile ===
        'profile.title': 'Profile',
        'profile.explorer': 'Explorer',
        'profile.collected': 'Collected',
        'profile.exp': 'EXP',
        'profile.adventureDays': 'Adventure Days',
        'profile.achievements': 'Achievements',
        'profile.recentCollections': 'Recent Collections',
        'profile.noCollections': 'No spots collected yet',
        'profile.resetProgress': 'Reset Progress',
        'profile.aiAssistant': 'AI Assistant',
        'profile.resetConfirm': 'Are you sure you want to reset all progress? This cannot be undone!',
        'profile.resetSuccess': 'Progress has been reset!',
        
        // Achievement names
        'achievement.firstSpot': 'First Discovery',
        'achievement.halfWay': 'Halfway Explorer',
        'achievement.master': 'Adventure Master',
        'achievement.natureLover': 'Nature Lover',
        'achievement.cultureExplorer': 'Culture Explorer',
        'achievement.specialHunter': 'Special Hunter',
        
         // === Check-in Page ===
        'checkin.title': 'Spot Check-in',
        'checkin.selectMethod': 'Select Check-in Method',
        'checkin.scan': 'Scan QR Code',
        'checkin.scanDesc': 'Scan the QR Code at the spot',
        'checkin.startScan': 'Start Scanning',
        'checkin.simulate': 'Simulate Check-in',
        'checkin.simulateDesc': 'For testing purposes, unlock spot directly',
        'checkin.simulateBtn': 'Simulate',
        'checkin.scanHint': 'Align QR Code within the frame to scan automatically',
        'checkin.noQRCode': 'Cannot find QR Code?',
        'checkin.noQRCodeDesc': 'Please check if the spot has a QR Code sign',
        'checkin.useSimulate': 'Use Simulate Check-in',
        'checkin.success': 'Collection Successful!',
        'checkin.congrats': 'Congratulations! You collected',
        'checkin.levelUpTo': 'Level up to',
        'checkin.viewCollection': 'View Collection',
        'checkin.continue': 'Continue Exploring',
        'checkin.spotNotFound': 'Spot data not found!',
        'checkin.alreadyCollected': 'You have already collected this spot!',
        'checkin.wrongQRCode': 'This is not a Shoufeng Treasure Hunt spot QR Code!\n\nPlease scan the correct spot QR Code.',
        'checkin.noPlayerData': 'Player data not found!',
        
        // === AI Assistant ===
        'chat.title': 'AI Travel Assistant',
        'chat.subtitle': 'Ask me anything about Shoufeng travel',
        'chat.placeholder': 'Type your question...',
        'chat.send': 'Send',
        'chat.thinking': 'Thinking...',
        'chat.welcomeTitle': '👋 Hello! I\'m your Shoufeng travel assistant',
        'chat.welcome1': '🗺️ Recommend spots and routes',
        'chat.welcome2': '🍜 Local food suggestions',
        'chat.welcome3': '🚗 Transportation and accommodation info',
        'chat.welcome4': '📸 Photo spots',
        'chat.exampleQuestion': 'What spots do you recommend?',
        
        // === QR Code Generator ===
        'qr.title': 'QR Code Generator',
        'qr.subtitle': 'Generate QR codes for spots',
        'qr.selectSpot': 'Select Spot',
        'qr.generate': 'Generate QR Code',
        'qr.download': 'Download QR Code',
        'qr.print': 'Print',
        'qr.spotCode': 'Spot Code',
        
        // === Buttons ===
        'btn.back': 'Back',
        'btn.confirm': 'Confirm',
        'btn.cancel': 'Cancel',
        'btn.save': 'Save',
        'btn.edit': 'Edit',
        'btn.delete': 'Delete',
        'btn.close': 'Close',
        'btn.viewMore': 'View More',
        'btn.startNow': 'Start Now',
        
        // === Messages ===
        'msg.loading': 'Loading...',
        'msg.noData': 'No Data',
        'msg.error': 'An error occurred',
        'msg.success': 'Success',
        'msg.networkError': 'Network error, please check connection',
    },
    
    'ja': {
        // === 共通 ===
        'app.title': '寿豊トレジャーハント',
        'app.subtitle': '宝探しのように花蓮寿豊の美しいスポットを探索',
        'app.description': '花蓮寿豊の美しさを発見',
        
        // === ナビゲーション ===
        'nav.home': 'ホーム',
        'nav.map': 'マップ',
        'nav.collection': 'コレクション',
        'nav.profile': 'プロフィール',
        'nav.spots': 'スポットマップ',
        'nav.ai': 'AIアシスタント',
        'nav.allSpots': '全スポット',
		'music.turnOn': '音楽をオン',
        'music.turnOff': '音楽をオフ',
        // === ホーム ===
        'home.title': '寿豊トレジャーハント',
        'home.subtitle': '宝探しのように\n花蓮寿豊の美しいスポットを探索',
        'home.startAdventure': '冒険開始',
        'home.aiHelper': 'AIアシスタント',
        
        // === キャラクター作成 ===
        'character.title': 'キャラクターを作成',
        'character.subtitle': 'アバターを選んで名前をつけよう!',
        'character.selectAvatar': 'アバターを選択',
        'character.inputName': '名前を入力',
        'character.namePlaceholder': 'あなたの冒険者名',
        'character.back': '戻る',
        'character.start': '冒険開始',
        'character.alert': '名前を入力してください!',
        
        // === ゲームホーム ===
        'game.title': 'ゲームホーム',
        'game.adventurer': '冒険者',
        'game.level': 'レベル',
        'game.exp': '経験値',
        'game.selectRoute': '冒険ルートを選択',
        'game.routeDesc': '寿豊の自然、文化、特別なスポットを探索',
        'game.spots': '個のスポット',
        
        // === ルート ===
        'route.nature': '自然',
        'route.culture': '文化',
        'route.special': '特別',
        'route.nature.title': '自然・エコツアー',
        'route.nature.desc': '鯉魚潭、雲山水などの自然の驚異を探索',
        'route.nature.spots': '5つのスポット:樹湖滝、雲山水、白鮑渓など',
        'route.culture.title': '文化体験ツアー',
        'route.culture.desc': '考古学博物館や歴史的な寺院を訪問',
        'route.culture.spots': '5つのスポット:寿豊駅、豊田駅など',
        'route.special.title': '特別体験ツアー',
        'route.special.desc': '地元料理、DIY活動、ユニークな体験を楽しむ',
        'route.special.spots': '4つのスポット:アイスショップ、書店、養魚場など',
        
        // === マップ/スポット ===
        'map.title': 'スポットマップ',
        'map.all': '全て',
        'map.collected': '収集済み',
        'map.uncollected': '未収集',
        'map.difficulty.easy': '簡単',
        'map.difficulty.medium': '普通',
        'map.difficulty.hard': '難しい',
        'map.checkIn': 'チェックイン',
        'map.details': '詳細',
        'map.notCollected': 'まだ収集していません',
        
        // === スポット詳細 ===
        'spot.info': 'スポット情報',
        'spot.description': '説明',
        'spot.address': '住所',
        'spot.openTime': '営業時間',
        'spot.tips': 'ヒント',
        'spot.difficulty': '難易度',
        'spot.exp': '経験値',
        'spot.route': 'ルート',
        'spot.checkIn': 'チェックインへ',
        'spot.viewOnMap': 'マップで表示',
        'spot.back': '戻る',
		'spot.introduction':'スポット紹介',
		'spot.detailInfo':'詳細情報',
		'spot.travelTips':'旅行のヒント',
        
        // === コレクション ===
        'collection.title': 'マイコレクション',
        'collection.spots': '個のスポット',
        'collection.empty': 'まだ収集したスポットがありません',
        'collection.emptyDesc': '寿豊の美しいスポットを探索しましょう!',
        'collection.goExplore': '探索開始',
        'collection.collectedAt': '収集日時',
		'collection.subtitle':'アドベンチャーマスター',
		'collection.total': '総スポット数',
		'collection.collected':'収集済み',
		
		
         // === プロフィール ===
        'profile.title': 'プロフィール',
        'profile.explorer': '探検家',
        'profile.collected': '収集済み',
        'profile.exp': '経験値',
        'profile.adventureDays': '冒険日数',
        'profile.achievements': '実績バッジ',
        'profile.recentCollections': '最近の収集',
        'profile.noCollections': 'まだスポットを収集していません',
        'profile.resetProgress': '進行状況をリセット',
        'profile.aiAssistant': 'AIアシスタント',
        'profile.resetConfirm': 'すべての進行状況をリセットしてもよろしいですか？この操作は元に戻せません！',
        'profile.resetSuccess': '進行状況がリセットされました！',
        
        // 実績名
        'achievement.firstSpot': '初探訪',
        'achievement.halfWay': '中間地点',
        'achievement.master': '冒険マスター',
        'achievement.natureLover': '自然愛好家',
        'achievement.cultureExplorer': '文化探索者',
        'achievement.specialHunter': '特別ハンター',
        
        // === チェックインページ ===
        'checkin.title': 'スポットチェックイン',
        'checkin.selectMethod': 'チェックイン方法を選択',
        'checkin.scan': 'QRコードをスキャン',
        'checkin.scanDesc': 'スポットに到着後、現場のQRコードをスキャン',
        'checkin.startScan': 'スキャン開始',
        'checkin.simulate': '模擬チェックイン',
        'checkin.simulateDesc': 'テスト用、スポットを直接アンロック',
        'checkin.simulateBtn': '模擬チェックイン',
        'checkin.scanHint': 'QRコードをフレーム内に合わせると自動的にスキャンされます',
        'checkin.noQRCode': 'QRコードが見つかりませんか？',
        'checkin.noQRCodeDesc': 'スポットにQRコード標識があるか確認してください',
        'checkin.useSimulate': '模擬チェックインを使用',
        'checkin.success': '収集成功！',
        'checkin.congrats': 'おめでとうございます！収集しました',
        'checkin.levelUpTo': 'レベルアップ',
        'checkin.viewCollection': 'コレクションを見る',
        'checkin.continue': '探索を続ける',
        'checkin.spotNotFound': 'スポットデータが見つかりません！',
        'checkin.alreadyCollected': 'このスポットは既に収集済みです！',
        'checkin.wrongQRCode': 'これは壽豐トレジャーハントのスポットQRコードではありません！\n\n正しいスポットQRコードをスキャンしてください。',
        'checkin.noPlayerData': 'プレイヤーデータが見つかりません！',
        
        // === AIアシスタント ===
        'chat.title': 'AI旅行アシスタント',
        'chat.subtitle': '寿豊旅行について何でも聞いてください',
        'chat.placeholder': '質問を入力...',
        'chat.send': '送信',
        'chat.thinking': '考え中...',
        'chat.welcomeTitle': '👋 こんにちは!寿豊旅行アシスタントです',
        'chat.welcome1': '🗺️ スポットとルートの推奨',
        'chat.welcome2': '🍜 地元料理の提案',
        'chat.welcome3': '🚗 交通と宿泊情報',
        'chat.welcome4': '📸 写真スポット',
        'chat.exampleQuestion': 'おすすめのスポットは?',
        
        // === QRコード生成器 ===
        'qr.title': 'QRコード生成器',
        'qr.subtitle': 'スポットのQRコードを生成',
        'qr.selectSpot': 'スポットを選択',
        'qr.generate': 'QRコード生成',
        'qr.download': 'QRコードをダウンロード',
        'qr.print': '印刷',
        'qr.spotCode': 'スポットコード',
        
        // === ボタン ===
        'btn.back': '戻る',
        'btn.confirm': '確認',
        'btn.cancel': 'キャンセル',
        'btn.save': '保存',
        'btn.edit': '編集',
        'btn.delete': '削除',
        'btn.close': '閉じる',
        'btn.viewMore': 'もっと見る',
        'btn.startNow': '今すぐ開始',
        
        // === メッセージ ===
        'msg.loading': '読み込み中...',
        'msg.noData': 'データなし',
        'msg.error': 'エラーが発生しました',
        'msg.success': '成功',
        'msg.networkError': 'ネットワークエラー、接続を確認してください',
    }
};

// 多語言系統核心類別
class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectLanguage();
        this.translations = translations;
    }
    
    // 偵測瀏覽器語言
    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) return 'zh-TW';
        if (browserLang.startsWith('ja')) return 'ja';
        if (browserLang.startsWith('en')) return 'en';
        return 'zh-TW';
    }
    
    // 從 localStorage 讀取語言設定
    getStoredLanguage() {
        return localStorage.getItem('app_language');
    }
    
    // 儲存語言設定
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('app_language', lang);
        this.updatePageLanguage();
    }
    
    // 取得翻譯文字 - 修正版（使用扁平結構直接查找）
    t(key) {
        const value = this.translations[this.currentLang]?.[key];
        return value || key;
    }
    
    // 更新頁面所有翻譯
    updatePageLanguage() {
        // 更新所有帶有 data-i18n 屬性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const text = this.t(key);
            
            // 如果是 input 的 placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = text;
                }
            } else {
                // 處理換行符號
                if (text.includes('\n')) {
                    element.innerHTML = text.replace(/\n/g, '<br>');
                } else {
                    element.textContent = text;
                }
            }
        });
        
        // 更新 HTML lang 屬性
        document.documentElement.lang = this.currentLang;
        
        // 更新 title
        const titleElement = document.querySelector('title[data-i18n]');
        if (titleElement) {
            const titleKey = titleElement.getAttribute('data-i18n');
            document.title = this.t(titleKey);
        }
        
        // 觸發自訂事件
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: this.currentLang } 
        }));
    }
    
    // 取得當前語言
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    // 取得所有可用語言
    getAvailableLanguages() {
        return [
            { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'ja', name: '日本語', flag: '🇯🇵' }
        ];
    }
}

// 建立全域實例
const i18n = new I18n();

// 頁面載入完成後初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        i18n.updatePageLanguage();
    });
} else {
    i18n.updatePageLanguage();
}
