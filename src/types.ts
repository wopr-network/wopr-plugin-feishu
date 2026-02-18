// Re-export core plugin types (local definitions matching @wopr-network/plugin-types)

export interface ConfigField {
	name: string;
	type: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	description?: string;
	hidden?: boolean;
	default?: unknown;
	options?: Array<{ value: string; label: string }>;
}

export interface ConfigSchema {
	title: string;
	description: string;
	fields: ConfigField[];
}

export interface StreamMessage {
	type: "text" | "assistant";
	content: string;
}

export interface ChannelInfo {
	type: string;
	id: string;
	name?: string;
}

export interface InjectOptions {
	silent?: boolean;
	onStream?: (msg: StreamMessage) => void;
	from?: string;
	channel?: ChannelInfo;
	images?: string[];
}

export interface LogMessageOptions {
	from?: string;
	channel?: ChannelInfo;
}

export interface PluginLogger {
	info: (...args: unknown[]) => void;
	warn: (...args: unknown[]) => void;
	error: (...args: unknown[]) => void;
}

export interface AgentIdentity {
	name?: string;
	creature?: string;
	vibe?: string;
	emoji?: string;
}

export interface UserProfile {
	name?: string;
	preferredAddress?: string;
	pronouns?: string;
	timezone?: string;
	notes?: string;
}

export interface WOPRPluginContext {
	inject: (
		session: string,
		message: string,
		options?: InjectOptions,
	) => Promise<string>;
	logMessage: (
		session: string,
		message: string,
		options?: LogMessageOptions,
	) => void;
	injectPeer: (
		peer: string,
		session: string,
		message: string,
	) => Promise<string>;
	getIdentity: () => { publicKey: string; shortId: string; encryptPub: string };
	getAgentIdentity: () => AgentIdentity | Promise<AgentIdentity>;
	getUserProfile: () => UserProfile | Promise<UserProfile>;
	getSessions: () => string[];
	getPeers: () => unknown[];
	getConfig: <T = unknown>() => T;
	saveConfig: <T>(config: T) => Promise<void>;
	getMainConfig: (key?: string) => unknown;
	registerConfigSchema: (pluginId: string, schema: ConfigSchema) => void;
	getPluginDir: () => string;
	log: PluginLogger;
}

export interface WOPRPlugin {
	name: string;
	version: string;
	description: string;
	init?: (context: WOPRPluginContext) => Promise<void>;
	shutdown?: () => Promise<void>;
}

// Feishu-specific config
export interface FeishuConfig {
	enabled?: boolean;
	mode?: "websocket" | "webhook"; // Default: "websocket"
	appId?: string; // Feishu App ID
	appSecret?: string; // Feishu App Secret
	encryptKey?: string; // Event encryption key (for webhook mode)
	verificationToken?: string; // Event verification token (for webhook mode)
	domain?: "feishu" | "lark" | string; // "feishu" (China) or "lark" (international) or custom domain
	botName?: string; // Bot display name for mention stripping
	webhookPort?: number; // Port for webhook HTTP server (default: 3000)
	webhookPath?: string; // Path for event webhook (default: "/webhook/event")
	cardWebhookPath?: string; // Path for card action webhook (default: "/webhook/card")
	dmPolicy?: "open" | "disabled"; // How to handle DMs (default: "open")
	groupPolicy?: "mention" | "all" | "disabled"; // How to handle group messages (default: "mention")
	useRichCards?: boolean; // Send responses as interactive cards (default: true)
	cardHeaderColor?: string; // Card header template color (default: "blue")
}
