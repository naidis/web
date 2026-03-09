'use client';

import { useState } from 'react';

const installCommands = {
    unix: 'curl -fsSL https://raw.githubusercontent.com/naidis/release/main/install.sh | bash',
    windows: 'iwr -useb https://raw.githubusercontent.com/naidis/release/main/install.ps1 | iex',
} as const;

type OS = 'unix' | 'windows';

export function InstallBlock() {
    const [os, setOs] = useState<OS>('unix');
    const [copied, setCopied] = useState(false);

    const command = installCommands[os];

    const handleCopy = async () => {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-lg border bg-card overflow-hidden">
            {/* OS Tabs */}
            <div className="flex border-b text-sm">
                <button
                    onClick={() => setOs('unix')}
                    className={`flex-1 px-4 py-2.5 font-medium transition-colors ${os === 'unix'
                        ? 'text-foreground bg-muted/50 border-b-2 border-violet-500'
                        : 'text-muted-foreground hover:text-foreground'
                        }`}
                >
                    macOS / Linux
                </button>
                <button
                    onClick={() => setOs('windows')}
                    className={`flex-1 px-4 py-2.5 font-medium transition-colors ${os === 'windows'
                        ? 'text-foreground bg-muted/50 border-b-2 border-violet-500'
                        : 'text-muted-foreground hover:text-foreground'
                        }`}
                >
                    Windows
                </button>
            </div>

            {/* Command */}
            <div className="p-3">
                <div className="relative group">
                    <pre className="bg-muted rounded-md px-4 py-3 text-[13px] font-mono overflow-x-auto whitespace-nowrap select-all scrollbar-hide">
                        <code><span className="text-muted-foreground select-none">$ </span>{command}</code>
                    </pre>
                    <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 rounded text-xs bg-background/80 border text-muted-foreground hover:text-foreground"
                    >
                        {copied ? '✓ Copied' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    );
}
