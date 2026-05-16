export type NavLink = {
  label: string          // 标签
  href: string           // 链接
}

export type SocialLink = {
  key: string            // 键名
  name: string           // 名称
  handle: string         // 用户名
  href: string           // 链接
  hoverColor: string     // 悬停颜色
}

export type Interest = {
  icon: string           // 图标
  title: string          // 标题
  description: string    // 描述
}

export type Skill = {
  name: string           // 技能名称
  level: number          // 熟练度等级
}

export type SectionHeader = {
  tag: string            // 标签
  title: string          // 标题
}

export type CtaLink = {
  label: string          // 按钮文字
  href: string           // 链接
  external?: boolean     // 是否外部链接
}

export type SiteConfig = {
  name: string           // 站点名称
  title: string          // 站点标题
  description: string    // 站点描述
  role: string           // 角色/身份
  tagline: string        // 标语/签名
  bio: string            // 个人简介
  avatarUrl: string      // 头像链接
  heroImageUrl: string   // 主页背景图链接
  heroImageAlt: string   // 主页背景图描述

  ctaLink?: CtaLink      // 行动号召链接

  footer: {
    quote: string        // 页脚引用语
    credit: string       // 版权/致谢信息
  }

  navLinks: NavLink[]            // 导航链接
  socialLinks: SocialLink[]      // 社交链接
  interests: Interest[]          // 兴趣爱好
  skills: Skill[]                // 技能列表
  techStack: string[]            // 技术栈

  sections: {
    about: SectionHeader                         // "关于我" 板块
    skills: SectionHeader & { techStackLabel: string }  // "技能" 板块
    connect: SectionHeader                       // "联系" 板块
  }
}

export const siteConfig: SiteConfig = {
    "name": "BaiXuan",
    "title": "BaiXuan的个人主页",
    "description": "BaiXuan的个人主页",
    "role": "个人主页",
    "tagline": "ACGN / INFJ-T / Depression / Python / CS.ML / NLP",
    "bio": "你好呀！我是白轩（BaiXuan），很高兴你可以进入并浏览我的个人主页。",
    "avatarUrl": "http://q.qlogo.cn/headimg_dl?dst_uin=2182344375&spec=640&img_type=jpg",
    "heroImageUrl": "/images/140981624_p0.webp",
    "heroImageAlt": "二次元风格的梦幻天空场景插图，Pixiv ID 140981624",
    "ctaLink": {
        "label": "查看我的Blog",
        "href": "None",
        "external": true
    },
    "footer": {
        "quote": "“单程孤舟，出云入霞，如歌如吟。”",
        "credit": "Made with love by BaiXuan \n Built by GitHub : https://github.com/TY-China/OwnerPages/"
    },
    "navLinks": [
        {
            "label": "首页",
            "href": "#"
        },
        {
            "label": "关于",
            "href": "#about"
        },
        {
            "label": "技能",
            "href": "#skills"
        },
        {
            "label": "联系",
            "href": "#connect"
        }
    ],
    "socialLinks": [
        {
            "key": "github",
            "name": "GitHub",
            "handle": "@TY-China",
            "href": "https://github.com/TY-China",
            "hoverColor": "hover:border-[#333]/40 hover:text-[#333]"
        },
        {
            "key": "twitter",
            "name": "Twitter / X",
            "handle": "None",
            "href": "None",
            "hoverColor": "hover:border-[#1DA1F2]/40 hover:text-[#1DA1F2]"
        },
        {
            "key": "bilibili",
            "name": "Bilibili",
            "handle": "None",
            "href": "None",
            "hoverColor": "hover:border-[#00A1D6]/40 hover:text-[#00A1D6]"
        },
        {
            "key": "email",
            "name": "邮箱",
            "handle": "2182344375@qq.com",
            "href": "mailto:2182344375@qq.com",
            "hoverColor": "hover:border-accent/40 hover:text-accent"
        },
        {
            "key": "qq",
            "name": "QQ",
            "handle": "2182344375",
            "href": "mqq://im/chat?chat_type=wpa&uin=2182344375&version=1&src_type=web",
            "hoverColor": "hover:border-[#12B7F5]/40 hover:text-[#12B7F5]"
        }
    ],
    "interests": [
        {
            "icon": "code",
            "title": "开发",
            "description": "构建有趣和实用的应用，不断提升自己的编程技能和技术栈。"
        },
        {
            "icon": "palette",
            "title": "自然语言处理",
            "description": "研究自然语言处理技术，探索 AI 与人类交互的新可能性。"
        },
        {
            "icon": "sparkles",
            "title": "ACGN 文化",
            "description": "闲暇时会追番和看漫画，喜欢轻日常和百合向作品。"
        },
        {
            "icon": "music",
            "title": "音乐",
            "description": "编程时喜欢听 J-pop、lo-fi 节拍和环境氛围音乐。"
        }
    ],
    "skills": [
        {
            "name": "Python",
            "level": 100
        },
        {
            "name": "JavaScript",
            "level": 90
        },
        {
            "name": "Tailwind CSS",
            "level": 50
        },
        {
            "name": "Java",
            "level": 30
        },
        {
            "name": "MySQL",
            "level": 10
        },
        {
            "name": "LaTeX",
            "level": 1
        },
        {
            "name": "E for Chinese",
            "level": 99
        }
    ],
    "techStack": [
        "Python",
        "FastAPI",
        "Nonebot",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Vue3",
        "MySQL",
        "Git",
        "LaTeX",
        "Docker",
        "Linux"
    ],
    "sections": {
        "about": {
            "tag": "关于我",
            "title": "关于我自己的一些介绍"
        },
        "skills": {
            "tag": "技能",
            "title": "我使用的工具与技术",
            "techStackLabel": "技术栈"
        },
        "connect": {
            "tag": "联系",
            "title": "来交个朋友吧"
        }
    }
}