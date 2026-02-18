// Feishu-plugin-local types.
// WOPRPlugin, WOPRPluginContext, ChannelProvider, etc. are from @wopr-network/plugin-types.

export interface AgentIdentity {
	name?: string;
	creature?: string;
	vibe?: string;
	emoji?: string;
}

export interface ChannelInfo {
	type: string;
	id: string;
	name?: string;
}

// Feishu-specific config
export interface FeishuConfig {
	enabled?: boolean;
	mode?: "websocket" | "webhook"; // Default: "websocket"
	appId?: string; // Feishu App ID
	appSecret?: string; // Feishu App Secret
	encryptKey?: string; // Event encryption key (for webhook mode)
	verificationToken?: string; // Event verification token (for webhook mode)
	domain?: "feishu" | "lark" | string; // "feishu" (China) or "lark" (international)
	botName?: string; // Bot display name for mention stripping
	webhookPort?: number; // Port for webhook HTTP server (default: 3000)
	webhookPath?: string; // Path for event webhook (default: "/webhook/event")
	cardWebhookPath?: string; // Path for card action webhook (default: "/webhook/card")
	dmPolicy?: "open" | "disabled"; // How to handle DMs (default: "open")
	groupPolicy?: "mention" | "all" | "disabled"; // How to handle group messages (default: "mention")
	useRichCards?: boolean; // Send responses as interactive cards (default: true)
	cardHeaderColor?: string; // Card header template color (default: "blue")
}
