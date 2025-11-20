import { 
  BrainCircuit, 
  PenTool, 
  Image as ImageIcon, 
  Code, 
  Video, 
  GraduationCap, 
  Music,
  Box,
  Globe,
  MessageSquare
} from 'lucide-react';
import { Category } from './types';

// Helper for clean Unsplash URLs
const img = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

export const CATEGORIES: Category[] = [
  {
    id: 'core-models',
    title: '核心大模型',
    icon: BrainCircuit,
    description: '中国顶尖的通用人工智能与全球领先模型',
    themeColor: 'blue',
    gradient: 'from-blue-400 to-indigo-500',
    tools: [
      { id: 'kimi', name: 'Kimi 智能助手', description: '月之暗面出品，支持超长文本无损分析', url: 'https://kimi.moonshot.cn/', tags: ['长文本', '国产之光'], isHot: true, image: img('1532009324734-20a7a5813719') }, // Moon/Dark
      { id: 'deepseek', name: 'DeepSeek', description: '深度求索，数学与代码能力极强的开源模型', url: 'https://www.deepseek.com/', tags: ['开源', '代码强'], isHot: true, image: img('1551288049-bebda4e38f71') }, // Data Viz
      { id: 'doubao', name: '豆包 (Doubao)', description: '字节跳动出品，语音交互流畅，功能全面', url: 'https://www.doubao.com/', tags: ['字节', '语音'], isHot: true, image: img('1617791160505-6f00504e3519') }, // Bubble/Round
      { id: 'wenxin', name: '文心一言', description: '百度全新一代知识增强大语言模型', url: 'https://yiyan.baidu.com/', tags: ['百度', '综合'], image: img('1519681393784-d120267933ba') }, // Starry Sky
      { id: 'tongyi', name: '通义千问', description: '阿里巴巴超大规模语言模型，生产力工具', url: 'https://tongyi.aliyun.com/', tags: ['阿里', '全能'], image: img('1451187580459-43490279c0fa') }, // Global Network
      { id: 'hunyuan', name: '腾讯混元', description: '腾讯全链路自研通用大模型', url: 'https://hunyuan.tencent.com/', tags: ['腾讯', '办公'], image: img('1639322537228-f710d846310a') }, // Abstract Mesh
      { id: 'spark', name: '讯飞星火', description: '科大讯飞出品，擅长逻辑推理与语音转写', url: 'https://xinghuo.xfyun.cn/', tags: ['语音', '办公'], image: img('1464802686167-b939a6910659') }, // Spark/Galaxy
      { id: 'minimax', name: '海螺AI (MiniMax)', description: '拟人化程度高，擅长角色扮演与创意', url: 'https://hailuoai.com/', tags: ['情感', '语音'], image: img('1535350356005-fd81b3851e4f') }, // Shell/Spiral
      { id: 'chatgpt', name: 'ChatGPT', description: 'OpenAI出品，开启AI时代的里程碑（需网络）', url: 'https://chat.openai.com/', tags: ['全球', '标杆'], image: img('1675271591211-607ad88e0a68') }, // Green AI
      { id: 'claude', name: 'Claude 3', description: 'Anthropic出品，不仅聪明且充满人文关怀', url: 'https://claude.ai/', tags: ['写作', '逻辑'], image: img('1491841550275-ad7854e35ca6') }, // Warm Paper
      { id: 'gemini', name: 'Gemini', description: 'Google最强多模态模型（需网络）', url: 'https://gemini.google.com/', tags: ['谷歌', '多模态'], image: img('1504333638930-c8787321eee0') }, // Blue Abstract
      { id: 'tiangong', name: '天工 AI', description: '昆仑万维，拥有强大的搜索与生成能力', url: 'https://www.tiangong.cn/', tags: ['搜索', '百科'], image: img('1506260408121-e353d10b87c7') }, // Sky/Cloud
      { id: 'baichuan', name: '百川智能', description: '搜狗王小川创立，医疗与长文表现优异', url: 'https://www.baichuan-ai.com/', tags: ['医疗', '长文'], image: img('1500382017468-9049fed747ef') }, // Nature/Stream
      { id: '360zhinai', name: '360智脑', description: '注重安全的认知型通用大模型', url: 'https://ai.360.com/', tags: ['安全', '政企'], image: img('1563013544-824ae1b704d3') }, // Lock/Security
      { id: 'sensechat', name: '商量 SenseChat', description: '商汤科技日日新大模型', url: 'https://chat.sensetime.com/', tags: ['商汤', '视觉'], image: img('1617529497899-c385de8954bc') }, // Eye/Lens
    ]
  },
  {
    id: 'academic-search',
    title: '学术科研与深度搜索',
    icon: GraduationCap,
    description: '辅助论文写作、文献查找、数据分析',
    themeColor: 'emerald',
    gradient: 'from-emerald-400 to-teal-500',
    tools: [
      { id: 'metaso', name: '秘塔AI搜索', description: '无广告、直达结果，学术研究的首选利器', url: 'https://metaso.cn/', tags: ['无广告', '精准'], isHot: true, image: img('1526304640154-d20102d2e7d3') }, // Clean Lab
      { id: 'nano-ai', name: '纳米搜索 (Nano)', description: '新一代AI搜索，快速精准获取信息', url: 'https://www.n.cn/', tags: ['极速', '搜索'], isNew: true, image: img('1532187863486-abf9dbad1b69') }, // Molecular
      { id: 'cnki-ai', name: 'CNKI AI学术助手', description: '知网官方AI，文献研读与综述生成', url: 'https://ai.cnki.net/', tags: ['知网', '权威'], image: img('1524995997946-a1c2e315a42f') }, // Library Books
      { id: 'scispace', name: 'SciSpace', description: '不仅能找论文，还能解释复杂图表的AI', url: 'https://typeset.io/', tags: ['解读', '外文'], isHot: true, image: img('1446776811953-b23d57bd21aa') }, // Space/Satellite
      { id: 'aminer', name: 'AMiner', description: '清华大学科技情报大数据挖掘平台', url: 'https://www.aminer.cn/', tags: ['挖掘', '图谱'], image: img('1550751827-4bd374c3f58b') }, // Data Mining
      { id: 'connected', name: 'Connected Papers', description: '可视化的文献关联图谱，找相关文献神器', url: 'https://www.connectedpapers.com/', tags: ['图谱', '关联'], image: img('1451187580459-43490279c0fa') }, // Network Web
      { id: 'readpaper', name: 'ReadPaper', description: '集翻译、笔记、讨论于一体的论文阅读', url: 'https://readpaper.com/', tags: ['社区', '笔记'], image: img('15067843178e7-34647d475644') }, // Tablet Reading
      { id: 'felo', name: 'Felo Search', description: '实时跨语言搜索，获取全球信息', url: 'https://felo.ai/', tags: ['跨语言', '日本'], image: img('1529400971008-f566de0e6dfc') }, // Globe/Map
      { id: 'elicit', name: 'Elicit', description: '像研究助理一样帮你做文献综述', url: 'https://elicit.com/', tags: ['综述', '科研'], image: img('1623944890595-1c6d7e6789b0') }, // Magnifying Glass
      { id: 'scholarcy', name: 'Scholarcy', description: '将长篇论文压缩成卡片式摘要', url: 'https://www.scholarcy.com/', tags: ['摘要', '速读'], image: img('1456513080510-7bf3a84b82f8') }, // Book Stack
      { id: 'genspark', name: 'Genspark', description: '生成式搜索页面，一站式整理信息', url: 'https://www.genspark.ai/', tags: ['聚合', '百科'], isNew: true, image: img('1470592560842-5101fab3f20c') }, // Spark/Light
      { id: 'perplexity', name: 'Perplexity', description: '结合了GPT与搜索引擎的答案引擎', url: 'https://www.perplexity.ai/', tags: ['引用', '精准'], image: img('1614064641938-3bbee52942c7') }, // Neural Network
      { id: 'consencus', name: 'Consensus', description: '基于科学证据的AI搜索引擎', url: 'https://consensus.app/', tags: ['科学', '证据'], image: img('1532619675605-1ede6c2ed2b0') }, // Analysis
      { id: 'researchrabbit', name: 'ResearchRabbit', description: '像Spotify一样推荐论文', url: 'https://www.researchrabbit.ai/', tags: ['推荐', '发现'], image: img('1481627834876-b7833e8f5570') }, // Library Aisle
      { id: 'scite', name: 'Scite', description: '智能引用分析，判断论文是否被支持', url: 'https://scite.ai/', tags: ['引用', '真伪'], image: img('1555066931-4365d14bab8c') }, // Code/Text Analysis
    ]
  },
  {
    id: 'image-vision',
    title: '视觉创作与绘画',
    icon: ImageIcon,
    description: '文生图、图像编辑、设计辅助',
    themeColor: 'pink',
    gradient: 'from-pink-400 to-rose-500',
    tools: [
      { id: 'jimeng', name: '即梦AI (Jimeng)', description: '字节跳动出品，超强图像与视频生成能力', url: 'https://jimeng.jianying.com/', tags: ['字节', '梦幻'], isNew: true, isHot: true, image: img('1618005182384-a83a8bd57fbe') }, // Dreamy Abstract
      { id: 'liblib', name: 'LiblibAI', description: '中国最大的原创Stable Diffusion模型社区', url: 'https://www.liblib.art/', tags: ['模型', '社区'], isHot: true, image: img('1513364776144-60967b0f800f') }, // Art Gallery
      { id: 'midjourney', name: 'Midjourney', description: '目前地表最强的艺术级图像生成工具', url: 'https://www.midjourney.com/', tags: ['艺术', '标杆'], image: img('1549490349-8643362247b5') }, // Surreal Art
      { id: 'fotor', name: 'Fotor AI', description: '全能照片编辑器与设计工具', url: 'https://www.fotor.com/', tags: ['修图', '设计'], image: img('1516035069371-29a1b244cc32') }, // Camera
      { id: 'meitu', name: '美图设计室', description: 'AI商业设计，电商主图一键生成', url: 'https://design.meitu.com/', tags: ['电商', '商用'], image: img('1483985988355-763728e1935b') }, // Fashion/Shopping
      { id: 'gaoding', name: '稿定设计AI', description: '零基础也能做海报的设计神器', url: 'https://www.gaoding.com/ai', tags: ['海报', '模版'], image: img('1626785774573-4b799315545d') }, // Design Layout
      { id: 'miaoya', name: '妙鸭相机', description: '高质量AI写真生成，媲美专业摄影', url: 'https://www.miaoya.cn/', tags: ['写真', '人像'], image: img('1534528741775-53994a69daeb') }, // Portrait Art
      { id: 'leonardo', name: 'Leonardo.ai', description: '游戏资产与艺术图片生成利器', url: 'https://leonardo.ai/', tags: ['游戏', '资产'], image: img('1597829590969-22c490254629') }, // Fantasy Art
      { id: 'seaart', name: 'SeaArt (海艺)', description: '国产易用的AI绘画工具，功能丰富', url: 'https://www.seaart.ai/', tags: ['绘画', 'SD'], image: img('1518998053901-53c6d7501bfc') }, // Water/Ink
      { id: 'dui', name: '堆友', description: '阿里出品，3D风格头像与设计资源', url: 'https://d.design/', tags: ['阿里', '3D'], image: img('1614854246700-518425b89db2') }, // 3D Shapes
      { id: 'huitu', name: '文心一格', description: '百度出品的AI艺术和创意辅助平台', url: 'https://yige.baidu.com/', tags: ['国风', '百度'], image: img('1578301978693-85e6c0c605b9') }, // Paint Brush
    ]
  },
  {
    id: 'video-gen',
    title: '视频生成与编辑',
    icon: Video,
    description: '文生视频、数字人、剪辑效率工具',
    themeColor: 'purple',
    gradient: 'from-purple-400 to-violet-600',
    tools: [
      { id: 'kling', name: '可灵 AI (Kling)', description: '快手出品，Sora级视频生成，效果惊艳', url: 'https://klingai.kuaishou.com/', tags: ['视频', '写实'], isHot: true, image: img('1492691527719-9d1e07e534b4') }, // Mountain Motion
      { id: 'vidu', name: 'Vidu', description: '生数科技，长时长高一致性视频生成', url: 'https://www.vidu.studio/', tags: ['动画', '流畅'], isNew: true, image: img('1535016120720-40c6874c5b95') }, // Film Reel
      { id: 'runway', name: 'Runway Gen-3', description: '好莱坞级别的AI视频编辑与生成', url: 'https://runwayml.com/', tags: ['专业', '电影'], image: img('1536440136628-849c177e76a1') }, // Cinema
      { id: 'pika', name: 'Pika Labs', description: '专注于动画与趣味视频的生成', url: 'https://pika.art/', tags: ['动画', '趣味'], image: img('1550745165-9bc0b252726f') }, // Retro Gaming/Fun
      { id: 'heygen', name: 'HeyGen', description: '目前最自然的AI数字人视频生成', url: 'https://www.heygen.com/', tags: ['数字人', '口型'], image: img('1531746020798-e6953c6e8e04') }, // Portrait
      { id: 'domo', name: 'DomoAI', description: '视频转绘，真人视频变动漫', url: 'https://domoai.app/', tags: ['转绘', '二次元'], image: img('1618336753974-aae8e04506aa') }, // Neon City
      { id: 'jianying', name: '剪映专业版', description: '字节跳动旗下，AI智能剪辑功能丰富', url: 'https://www.capcut.cn/', tags: ['剪辑', '配音'], image: img('1574717434417-4609045e7de8') }, // Video Editing
      { id: 'luma', name: 'Luma Dream Machine', description: '免费快速的高质量视频生成模型', url: 'https://lumalabs.ai/dream-machine', tags: ['3D', '快速'], image: img('1617791160585-0839181006b0') }, // 3D Cube
      { id: 'pixverse', name: 'PixVerse', description: '强大的国产视频生成平台', url: 'https://pixverse.ai/', tags: ['高清', '长视频'], image: img('1518640467709-68d9632a9e3c') }, // Galaxy/Space
      { id: 'morph', name: 'Morph Studio', description: '文本到视频的故事板创作', url: 'https://www.morphstudio.com/', tags: ['故事', '创作'], image: img('1604871000636-074fa5117945') }, // Neon Abstract
    ]
  },
  {
    id: 'writing-office',
    title: '写作与办公提效',
    icon: PenTool,
    description: '文案润色、PPT生成、笔记整理',
    themeColor: 'orange',
    gradient: 'from-orange-400 to-amber-500',
    tools: [
      { id: 'xiezuomao', name: '秘塔写作猫', description: 'AI写作伴侣，推敲、润色、改写一气呵成', url: 'https://xiezuocat.com/', tags: ['润色', '国产'], isHot: true, image: img('1514888286974-6c03e2ca1dba') }, // Cat
      { id: 'notion', name: 'Notion AI', description: '将AI完美集成到笔记与文档管理中', url: 'https://www.notion.so/', tags: ['笔记', '全能'], image: img('1497215728101-856f4ea42174') }, // Clean Desk
      { id: 'gamma', name: 'Gamma', description: '像写文档一样生成精美的PPT幻灯片', url: 'https://gamma.app/', tags: ['PPT', '演示'], isHot: true, image: img('1557804506-669a67965ba0') }, // Presentation
      { id: 'deepl', name: 'DeepL', description: '全球最准确的AI翻译工具', url: 'https://www.deepl.com/', tags: ['翻译', '精准'], image: img('1527689368864-dda0dfab7d94') }, // Dictionary/Travel
      { id: 'huoshan', name: '火山写作', description: '字节跳动智能写作助手，纠错能力强', url: 'https://www.writingo.net/', tags: ['纠错', '英语'], image: img('1455390582262-044cdead277a') }, // Writing
      { id: 'wps-ai', name: 'WPS AI', description: '金山办公AI，文档处理与公式生成', url: 'https://ai.wps.cn/', tags: ['文档', '表格'], image: img('1542435503-956c469947f6') }, // Office Work
      { id: 'xmind', name: 'XMind AI', description: '一键生成思维导图，拓展思路', url: 'https://xmind.ai/', tags: ['脑图', '思维'], image: img('1557426272-fc759fdf7a8d') }, // Brainstorm/Sticky Notes
      { id: 'feishu', name: '飞书智能伙伴', description: '企业级协作与自动化办公', url: 'https://www.feishu.cn/', tags: ['协作', '会议'], image: img('1556761175-5973dc0f32e7') }, // Teamwork
      { id: 'grammarly', name: 'Grammarly', description: '英文语法检查与风格润色权威', url: 'https://www.grammarly.com/', tags: ['英语', '语法'], image: img('1503676260728-1c00da094a0b') }, // Learning/Pencil
      { id: 'chatpdf', name: 'ChatPDF', description: '上传PDF，直接与文档内容对话', url: 'https://www.chatpdf.com/', tags: ['阅读', '摘要'], image: img('1568210753-330d480f6c5a') }, // Paperwork
      { id: 'beautiful', name: 'Beautiful.ai', description: '智能设计美观的演示文稿', url: 'https://www.beautiful.ai/', tags: ['设计', 'PPT'], image: img('1586281380349-63253167edfe') }, // Charts
      { id: 'tome', name: 'Tome', description: '生成式叙事PPT工具', url: 'https://tome.app/', tags: ['故事', '演示'], image: img('1519389950473-47ba0277781c') }, // Storytelling
      { id: 'copyai', name: 'Copy.ai', description: '营销文案与博客文章自动生成', url: 'https://www.copy.ai/', tags: ['营销', '文案'], image: img('1504868584819-f8e8b4b6d7e3') }, // Blogging
      { id: 'jasper', name: 'Jasper', description: '企业级营销内容创作AI', url: 'https://www.jasper.ai/', tags: ['商业', '品牌'], image: img('1460925895917-afdab827c52f') }, // Brand
    ]
  },
  {
    id: 'coding-dev',
    title: '编程与开发工具',
    icon: Code,
    description: '代码补全、Debug、技术问答',
    themeColor: 'cyan',
    gradient: 'from-cyan-400 to-blue-500',
    tools: [
      { id: 'marscode', name: '豆包MarsCode', description: '字节跳动免费智能编程助手', url: 'https://www.marscode.cn/', tags: ['免费', 'IDE'], isHot: true, image: img('1614728853911-264d5bc59b8f') }, // Mars
      { id: 'cursor', name: 'Cursor', description: '集成了GPT-4的革命性代码编辑器', url: 'https://cursor.sh/', tags: ['编辑器', '强力'], isHot: true, image: img('1555066931-4365d14bab8c') }, // Coding Screen
      { id: 'copilot', name: 'GitHub Copilot', description: '全球最流行的AI结对编程插件', url: 'https://github.com/features/copilot', tags: ['微软', '标杆'], image: img('1611162617474-5b21e879e113') }, // Tech Abstract
      { id: 'lingma', name: '通义灵码', description: '阿里出品，支持各大IDE的智能插件', url: 'https://tongyi.aliyun.com/lingma', tags: ['插件', '国产'], image: img('1531297461362-76ce1f973867') }, // Matrix
      { id: 'codegeex', name: 'CodeGeeX', description: '智谱AI推出的多语言代码生成', url: 'https://codegeex.cn/', tags: ['多语言', '翻译'], image: img('1517694712202-14dd9538aa97') }, // Laptop Code
      { id: 'comate', name: '百度 Comate', description: '百度智能代码助手，企业级推荐', url: 'https://comate.baidu.com/', tags: ['企业', '百度'], image: img('1485827404703-89b55fcc595e') }, // Robot Hand
      { id: 'codeium', name: 'Codeium', description: '个人免费的高性能代码补全工具', url: 'https://codeium.com/', tags: ['免费', '极速'], image: img('1550439062-e71802017e78') }, // Fast Lights
      { id: 'replit', name: 'Replit', description: '在线集成开发环境，内置AI Ghostwriter', url: 'https://replit.com/', tags: ['在线', '云端'], image: img('1484417894907-623942c8ee29') }, // Cloud Server
      { id: 'huggingface', name: 'Hugging Face', description: 'AI届的GitHub，模型与数据集宝库', url: 'https://huggingface.co/', tags: ['社区', '模型'], image: img('1593720213428-82a8ac09b369') }, // Yellow Emoji
      { id: 'modelscope', name: '魔搭社区', description: '阿里推出的中国AI模型社区', url: 'https://www.modelscope.cn/', tags: ['国内', '下载'], image: img('1519389950473-47ba0277781c') }, // Tech Work
    ]
  },
  {
    id: 'audio-3d',
    title: '音频与3D模型',
    icon: Box,
    description: '音乐生成、语音克隆、3D建模',
    themeColor: 'indigo',
    gradient: 'from-indigo-400 to-purple-500',
    tools: [
      { id: 'suno', name: 'Suno', description: '小白也能做出广播级歌曲的神器', url: 'https://suno.com/', tags: ['音乐', '爆款'], isHot: true, image: img('1511379938547-71f546fd4d46') }, // Music Notes
      { id: 'udio', name: 'Udio', description: '生成高保真、富有情感的音乐', url: 'https://www.udio.com/', tags: ['音乐', '高保真'], image: img('1484876065684-b683cf17d276') }, // Vinyl
      { id: 'skymusic', name: '天工SkyMusic', description: '国产SOTA级音乐生成大模型', url: 'https://music.tiangong.cn/', tags: ['国产', '中文歌'], image: img('1516280440614-6697288d5d38') }, // Concert
      { id: 'tripo', name: 'Tripo AI', description: '输入文字或图片，快速生成3D模型', url: 'https://www.tripo3d.ai/', tags: ['3D', '建模'], image: img('1509343256512-d77a5cb3791b') }, // Abstract Structure
      { id: 'meshy', name: 'Meshy', description: '为游戏开发者打造的3D资产生成工具', url: 'https://www.meshy.ai/', tags: ['纹理', '游戏'], image: img('1558591710-4b4a1ae0f04d') }, // Wireframe
      { id: 'spline', name: 'Spline AI', description: '基于浏览器的3D设计工具，AI辅助', url: 'https://spline.design/ai', tags: ['设计', '交互'], image: img('1550684846-032729c73356') }, // 3D Fluid
      { id: 'elevenlabs', name: 'ElevenLabs', description: '逼真的语音合成与克隆工具', url: 'https://elevenlabs.io/', tags: ['语音', '配音'], image: img('1524721696987-b9527dd9e3dd') }, // Microphone
      { id: 'fish', name: 'Fish Audio', description: '鱼聪明，强大的语音合成与转换', url: 'https://fish.audio/', tags: ['语音', 'TTS'], image: img('1522069169874-c58ec4b76be5') }, // Fish/Water
      { id: 'riffusion', name: 'Riffusion', description: '将频谱图转换为音乐的有趣工具', url: 'https://www.riffusion.com/', tags: ['实验', '创意'], image: img('1505740420926-4d519cd688e4') }, // Spectrum
    ]
  },
  {
    id: 'education-learn',
    title: '教育与语言学习',
    icon: Globe,
    description: '外语学习、数学解题、全科辅导',
    themeColor: 'blue',
    gradient: 'from-blue-400 to-teal-400',
    tools: [
      { id: 'duolingo', name: '多邻国', description: '游戏化外语学习，让学习不枯燥', url: 'https://www.duolingo.cn/', tags: ['语言', '免费'], image: img('1549057446-9f52650a62b9') }, // Green Balloon
      { id: 'speak', name: 'Speak', description: 'AI口语私教，实时纠正发音', url: 'https://www.speak.com/', tags: ['口语', '对话'], image: img('1590602847861-f357a9332bbc') }, // Podcast/Mic
      { id: 'photomath', name: 'Photomath', description: '拍照秒解数学题，详细步骤解析', url: 'https://photomath.com/', tags: ['数学', '解题'], image: img('1635070041078-e363dbe005cb') }, // Math Chalk
      { id: 'khan', name: 'Khanmigo', description: '可汗学院的AI导师，引导式教学', url: 'https://www.khanacademy.org/khan-labs', tags: ['辅导', '苏格拉底'], image: img('1427504494785-3a9ca7044f45') }, // Books/Apple
      { id: 'quizlet', name: 'Quizlet', description: 'AI辅助制作单词卡与复习计划', url: 'https://quizlet.com/', tags: ['记忆', '背诵'], image: img('1501504905252-473c47e087f8') }, // Sticky Notes
      { id: 'coursera', name: 'Coursera', description: '全球名校课程，AI辅助翻译与总结', url: 'https://www.coursera.org/', tags: ['课程', '证书'], image: img('1523050854058-8df90110c9f1') }, // University Hall
      { id: 'elsaspeak', name: 'ELSA Speak', description: '专注于英语发音纠正的AI教练', url: 'https://elsaspeak.com/', tags: ['发音', '英语'], image: img('1478737270239-2f02b77fc618') }, // Sound Waves
    ]
  }
];