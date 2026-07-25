import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { getKidTopicSidebarTheme } from './kidTopicSidebarThemes';

/**
 * Renders a sidebar label with spaces as normal break points, but keeps tokens like
 * "ALPHABETS-1" or "OS-1" together so the number is not orphaned on the next line.
 */
function SidebarTitleText({ children, className }) {
    if (typeof children !== 'string') {
        return <span className={className}>{children}</span>;
    }
    const text = children.trim();
    if (!text) return null;
    const parts = text.split(/\s+/);
    return (
        <span className={className}>
            {parts.map((part, i) => {
                const keepHyphenSuffixTogether = /^.+-[0-9]+$/.test(part);
                return (
                    <React.Fragment key={`${i}-${part.slice(0, 24)}`}>
                        {i > 0 ? ' ' : null}
                        <span className={keepHyphenSuffixTogether ? 'whitespace-nowrap' : undefined}>{part}</span>
                    </React.Fragment>
                );
            })}
        </span>
    );
}

/**
 * Kid-friendly topic sidebar for any class — dotted panel, greeting card, stadium topic rows.
 * Topics may define `children: [{ label, slug }]` linking to device sub-routes:
 * Class 2 Parts of Computer-1 → `/class2/input-devices/{slug}`, Class 3 Parts of Computer-2 → `/class3/output-devices/{slug}`.
 */
const KidTopicSidebar = ({ topics, activeTopicId, classId, className }) => {
    const t = getKidTopicSidebarTheme(classId);
    const sb = t.scrollbar;
    const location = useLocation();
    const [expandedTopicIds, setExpandedTopicIds] = useState(() => {
        const defaults = new Set();
        if (
            String(classId) === '2' &&
            topics.some((topic) => topic.id === 'computer-parts-1' && Array.isArray(topic.children) && topic.children.length > 0)
        ) {
            defaults.add('computer-parts-1');
        }
        if (String(classId) === '3') {
            if (topics.some((topic) => topic.id === 'parts-of-computer-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('parts-of-computer-2');
            }
            if (topics.some((topic) => topic.id === 'windows-os-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('windows-os-1');
            }
            if (topics.some((topic) => topic.id === 'ms-paint-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ms-paint-1');
            }
        }
        if (String(classId) === '4') {
            if (topics.some((topic) => topic.id === 'parts-of-computer-3' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('parts-of-computer-3');
            }
            if (topics.some((topic) => topic.id === 'windows-os-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('windows-os-2');
            }
            if (topics.some((topic) => topic.id === 'ms-paint-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ms-paint-2');
            }
            if (topics.some((topic) => topic.id === 'ms-word-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ms-word-1');
            }
            if (topics.some((topic) => topic.id === 'what-is-ai' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('what-is-ai');
            }
        }
        if (String(classId) === '5') {
            if (topics.some((topic) => topic.id === 'ms-word-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ms-word-2');
            }
            if (topics.some((topic) => topic.id === 'ms-paint-3' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ms-paint-3');
            }
            if (topics.some((topic) => topic.id === 'windows-os-3' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('windows-os-3');
            }
            if (topics.some((topic) => topic.id === 'ai-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ai-2');
            }
        }
        if (String(classId) === '6') {
            if (topics.some((topic) => topic.id === 'windows-os-4' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('windows-os-4');
            }
            if (topics.some((topic) => topic.id === 'typing-skills-4' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('typing-skills-4');
            }
            if (topics.some((topic) => topic.id === 'ms-word-3' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ms-word-3');
            }
            if (topics.some((topic) => topic.id === 'ms-ppt-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ms-ppt-1');
            }
            if (topics.some((topic) => topic.id === 'ai-3' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ai-3');
            }
        }
        if (String(classId) === '7') {
            if (topics.some((topic) => topic.id === 'ms-word-4' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ms-word-4');
            }
            if (topics.some((topic) => topic.id === 'ppt-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ppt-2');
            }
            if (topics.some((topic) => topic.id === 'python-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('python-1');
            }
            if (topics.some((topic) => topic.id === 'internet-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('internet-1');
            }
            if (topics.some((topic) => topic.id === 'html-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('html-1');
            }
            if (topics.some((topic) => topic.id === 'ai-4' && Array.isArray(topic.children) && topic.children.length > 0)) {
                defaults.add('ai-4');
            }
        }
        return defaults;
    });

    const inputDevicesPathPrefix = `/class${classId}/input-devices/`;
    const outputDevicesPathPrefix = `/class${classId}/output-devices/`;
    const dynamicChildRouteBases = useMemo(
        () =>
            topics
                .filter((topic) => typeof topic.childRouteBase === 'string' && topic.childRouteBase.length > 0)
                .map((topic) => ({ topicId: topic.id, base: topic.childRouteBase })),
        [topics]
    );

    const toggleExpand = (topicId, e) => {
        e.preventDefault();
        e.stopPropagation();
        setExpandedTopicIds((prev) => {
            const next = new Set(prev);
            if (next.has(topicId)) next.delete(topicId);
            else next.add(topicId);
            return next;
        });
    };

    useEffect(() => {
        if (
            String(classId) === '2' &&
            (location.pathname.startsWith('/class2/input-devices/') || activeTopicId === 'computer-parts-1')
        ) {
            setExpandedTopicIds((prev) => new Set(prev).add('computer-parts-1'));
        }
        if (
            String(classId) === '3' &&
            (location.pathname.startsWith('/class3/output-devices/') || activeTopicId === 'parts-of-computer-2')
        ) {
            setExpandedTopicIds((prev) => new Set(prev).add('parts-of-computer-2'));
        }
        dynamicChildRouteBases.forEach(({ topicId, base }) => {
            if (location.pathname.startsWith(base) || activeTopicId === topicId) {
                setExpandedTopicIds((prev) => new Set(prev).add(topicId));
            }
        });
        if (String(classId) === '3') {
            const windowsOsChildIds = [
                'windows-os-1-history',
                'windows-os-1-versions',
                'windows-os-1-functions',
                'windows-os-1-overview',
            ];
            const msPaintChildIds = ['ms-paint-1-what-paint-does', 'ms-paint-1-text', 'ms-paint-1-colors'];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'windows-os-1' || windowsOsChildIds.includes(activeTopicId)) next.add('windows-os-1');
                if (activeTopicId === 'ms-paint-1' || msPaintChildIds.includes(activeTopicId)) next.add('ms-paint-1');
                if (topics.some((topic) => topic.id === 'parts-of-computer-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('parts-of-computer-2');
                }
                if (topics.some((topic) => topic.id === 'windows-os-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('windows-os-1');
                }
                if (topics.some((topic) => topic.id === 'ms-paint-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ms-paint-1');
                }
                return next;
            });
        }
        if (String(classId) === '4') {
            const windowsOs2ChildIds = [
                'windows-os-2-files',
                'windows-os-2-folders',
                'windows-os-2-wallpaper',
                'windows-os-2-taskbar',
            ];
            const msPaint2ChildIds = ['ms-paint-2-shapes', 'ms-paint-2-tools'];
            const msWord1ChildIds = [
                'ms-word-1-what-is-word',
                'ms-word-1-history',
                'ms-word-1-vs-others',
                'ms-word-1-file-menu',
                'ms-word-1-home-menu',
                'ms-word-1-clipboard',
                'ms-word-1-font',
                'ms-word-1-paragraph',
                'ms-word-1-styles',
                'ms-word-1-editing',
            ];
            const whatIsAiChildIds = [
                'what-is-ai-meaning',
                'what-is-ai-human-vs-ai',
                'what-is-ai-everywhere',
                'what-is-ai-vs-robots',
                'what-is-ai-smart-devices',
                'what-is-ai-data',
                'what-is-ai-summary',
                'what-is-ai-test',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'windows-os-2' || windowsOs2ChildIds.includes(activeTopicId)) {
                    next.add('windows-os-2');
                }
                if (activeTopicId === 'ms-paint-2' || msPaint2ChildIds.includes(activeTopicId)) {
                    next.add('ms-paint-2');
                }
                if (activeTopicId === 'ms-word-1' || msWord1ChildIds.includes(activeTopicId)) {
                    next.add('ms-word-1');
                }
                if (activeTopicId === 'what-is-ai' || whatIsAiChildIds.includes(activeTopicId)) {
                    next.add('what-is-ai');
                }
                if (topics.some((topic) => topic.id === 'parts-of-computer-3' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('parts-of-computer-3');
                }
                if (topics.some((topic) => topic.id === 'windows-os-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('windows-os-2');
                }
                if (topics.some((topic) => topic.id === 'ms-paint-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ms-paint-2');
                }
                if (topics.some((topic) => topic.id === 'ms-word-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ms-word-1');
                }
                if (topics.some((topic) => topic.id === 'what-is-ai' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('what-is-ai');
                }
                return next;
            });
        }
        if (String(classId) === '5') {
            const msWord2ChildIds = [
                'ms-word-2-insert-menu',
                'ms-word-2-tables',
                'ms-word-2-pictures',
                'ms-word-2-shapes',
                'ms-word-2-header-footer',
                'ms-word-2-wordart',
                'ms-word-2-symbols-equations',
                'ms-word-2-page-number',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'ms-word-2' || msWord2ChildIds.includes(activeTopicId)) {
                    next.add('ms-word-2');
                }
                if (topics.some((topic) => topic.id === 'ms-word-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ms-word-2');
                }
                return next;
            });
            const msPaint3ChildIds = [
                'ms-paint-3-image',
                'ms-paint-3-exercises',
                'ms-paint-3-certification',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'ms-paint-3' || msPaint3ChildIds.includes(activeTopicId)) {
                    next.add('ms-paint-3');
                }
                if (topics.some((topic) => topic.id === 'ms-paint-3' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ms-paint-3');
                }
                return next;
            });
            const windowsOs3ChildIds = [
                'windows-os-3-install-windows',
                'windows-os-3-install-linux',
                'windows-os-3-install-mac',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'windows-os-3' || windowsOs3ChildIds.includes(activeTopicId)) {
                    next.add('windows-os-3');
                }
                if (topics.some((topic) => topic.id === 'windows-os-3' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('windows-os-3');
                }
                return next;
            });
            const ai2ChildIds = [
                'ai-2-fun-interactive',
                'ai-2-playful-visual',
                'ai-2-face-recognition',
                'ai-2-voice-recognition',
                'ai-2-chatbots',
                'ai-2-games',
                'ai-2-recommendations',
                'ai-2-image-recognition',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'ai-2' || ai2ChildIds.includes(activeTopicId)) {
                    next.add('ai-2');
                }
                if (topics.some((topic) => topic.id === 'ai-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ai-2');
                }
                return next;
            });
        }
        if (String(classId) === '6') {
            const windowsOs4ChildIds = [
                'windows-os-4-zip-rar',
                'windows-os-4-pdf',
                'windows-os-4-control-panel',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'windows-os-4' || windowsOs4ChildIds.includes(activeTopicId)) {
                    next.add('windows-os-4');
                }
                if (topics.some((topic) => topic.id === 'windows-os-4' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('windows-os-4');
                }
                return next;
            });
            const typingSkills4ChildIds = ['typing-skills-4-tasks', 'typing-skills-4-certification'];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'typing-skills-4' || typingSkills4ChildIds.includes(activeTopicId)) {
                    next.add('typing-skills-4');
                }
                if (topics.some((topic) => topic.id === 'typing-skills-4' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('typing-skills-4');
                }
                return next;
            });
            const msWord3ChildIds = [
                'ms-word-3-draw-menu',
                'ms-word-3-design-menu',
                'ms-word-3-layout-menu',
                'ms-word-3-review-menu',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'ms-word-3' || msWord3ChildIds.includes(activeTopicId)) {
                    next.add('ms-word-3');
                }
                if (topics.some((topic) => topic.id === 'ms-word-3' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ms-word-3');
                }
                return next;
            });
            const msPpt1ChildIds = [
                'ms-ppt-1-what-is-powerpoint',
                'ms-ppt-1-open',
                'ms-ppt-1-close',
                'ms-ppt-1-print',
                'ms-ppt-1-help',
                'ms-ppt-1-home-menu',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'ms-ppt-1' || msPpt1ChildIds.includes(activeTopicId)) {
                    next.add('ms-ppt-1');
                }
                if (topics.some((topic) => topic.id === 'ms-ppt-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ms-ppt-1');
                }
                return next;
            });
            const ai3ChildIds = [
                'ai-3-machine-learning',
                'ai-3-training-testing',
                'ai-3-pattern-recognition',
                'ai-3-good-bad-data',
                'ai-3-simple-algorithm',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'ai-3' || ai3ChildIds.includes(activeTopicId)) {
                    next.add('ai-3');
                }
                if (topics.some((topic) => topic.id === 'ai-3' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ai-3');
                }
                return next;
            });
        }
        if (String(classId) === '7') {
            const msWord4ChildIds = ['ms-word-4-mailings', 'ms-word-4-view', 'ms-word-4-exercises'];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'ms-word-4' || msWord4ChildIds.includes(activeTopicId)) {
                    next.add('ms-word-4');
                }
                if (topics.some((topic) => topic.id === 'ms-word-4' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ms-word-4');
                }
                return next;
            });
            const ppt2ChildIds = [
                'ppt-2-drawing',
                'ppt-2-insert-menu',
                'ppt-2-draw-menu',
                'ppt-2-design-menu',
                'ppt-2-transitions',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'ppt-2' || ppt2ChildIds.includes(activeTopicId)) {
                    next.add('ppt-2');
                }
                if (topics.some((topic) => topic.id === 'ppt-2' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ppt-2');
                }
                return next;
            });
            const python1ChildIds = [
                'python-1-what-is-python',
                'python-1-installing',
                'python-1-print',
                'python-1-comments',
                'python-1-input-output',
                'python-1-activity-hello',
                'python-1-variables',
                'python-1-data-types',
                'python-1-calculations',
                'python-1-combine-text-numbers',
                'python-1-activity-calculator',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'python-1' || python1ChildIds.includes(activeTopicId)) {
                    next.add('python-1');
                }
                if (topics.some((topic) => topic.id === 'python-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('python-1');
                }
                return next;
            });
            const internet1ChildIds = [
                'internet-1-what-is-internet',
                'internet-1-applications',
                'internet-1-lan-man-wan',
                'internet-1-intranet',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'internet-1' || internet1ChildIds.includes(activeTopicId)) {
                    next.add('internet-1');
                }
                if (topics.some((topic) => topic.id === 'internet-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('internet-1');
                }
                return next;
            });
            const html1ChildIds = [
                'html-1-what-is-html',
                'html-1-structure',
                'html-1-hello-world',
                'html-1-headings',
                'html-1-paragraphs',
                'html-1-line-breaks',
                'html-1-activity-about-me',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'html-1' || html1ChildIds.includes(activeTopicId)) {
                    next.add('html-1');
                }
                if (topics.some((topic) => topic.id === 'html-1' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('html-1');
                }
                return next;
            });
            const ai4ChildIds = [
                'ai-4-train-image-model',
                'ai-4-chatbot',
                'ai-4-scratch-ai',
                'ai-4-voice-command',
                'ai-4-draw-guess',
                'ai-4-healthcare',
                'ai-4-cars',
                'ai-4-education',
                'ai-4-security',
                'ai-4-agriculture',
            ];
            setExpandedTopicIds((prev) => {
                const next = new Set(prev);
                if (activeTopicId === 'ai-4' || ai4ChildIds.includes(activeTopicId)) {
                    next.add('ai-4');
                }
                if (topics.some((topic) => topic.id === 'ai-4' && Array.isArray(topic.children) && topic.children.length > 0)) {
                    next.add('ai-4');
                }
                return next;
            });
        }
    }, [classId, location.pathname, activeTopicId, topics, dynamicChildRouteBases]);

    return (
        <div
            className={`relative flex ${t.panelHeight} flex-col overflow-hidden rounded-[2rem] ${t.shell} sticky top-0`}
            style={t.style}
        >
            <div className="flex min-h-0 flex-1 flex-col gap-4 p-4 sm:p-5">
                <div className={`shrink-0 rounded-[1.35rem] p-4 ${t.greetingCard}`}>
                    <div className="flex items-center gap-3">
                        <div className="relative shrink-0">
                            <div
                                className={`h-14 w-14 rounded-full overflow-hidden ring-4 shadow-md ${t.avatarRing} ${t.avatarBg}`}
                            >
                                <img src="/dragon-avatar.svg" alt="" className="h-full w-full object-cover" width={56} height={56} />
                            </div>
                        </div>
                        <div className="min-w-0 text-left">
                            <p
                                className={`font-nunito font-extrabold text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r ${t.titleGradient} tracking-tight`}
                            >
                                Hi, Explorer!
                            </p>
                        </div>
                    </div>
                </div>

                <nav
                    aria-label={`${className} topics`}
                    className="flex min-h-0 flex-1 flex-col"
                >
                    <p
                        className={`shrink-0 font-nunito text-[0.72rem] sm:text-[0.78rem] font-extrabold uppercase tracking-[0.18em] px-1 mb-3 ${t.sectionLabel}`}
                    >
                        {className} topics
                    </p>
                    <div
                        className="kid-topic-nav-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden pr-1.5"
                        style={{
                            '--sb-thumb': sb.thumb,
                            '--sb-thumb-hover': sb.thumbHover,
                            '--sb-track': sb.track,
                        }}
                    >
                        <ul className="space-y-2.5 pb-1">
                        {topics
                            .filter((topic) => !topic.hideFromSidebar)
                            .map((topic) => {
                            const isActive =
                                activeTopicId === topic.id ||
                                (String(classId) === '2' &&
                                    topic.id === 'computer-parts-1' &&
                                    location.pathname.startsWith(inputDevicesPathPrefix)) ||
                                (String(classId) === '3' &&
                                    topic.id === 'parts-of-computer-2' &&
                                    location.pathname.startsWith(outputDevicesPathPrefix)) ||
                                (typeof topic.childRouteBase === 'string' &&
                                    topic.childRouteBase.length > 0 &&
                                    location.pathname.startsWith(topic.childRouteBase));
                            const hasChildren = Array.isArray(topic.children) && topic.children.length > 0;
                            const usesInputDeviceRoutes = String(classId) === '2' && topic.id === 'computer-parts-1';
                            const usesOutputDeviceRoutes = String(classId) === '3' && topic.id === 'parts-of-computer-2';
                            const usesDynamicChildRoutes =
                                typeof topic.childRouteBase === 'string' && topic.childRouteBase.length > 0;
                            const usesDeviceSublessonRoutes =
                                usesInputDeviceRoutes || usesOutputDeviceRoutes || usesDynamicChildRoutes;
                            const deviceSublessonPrefix = usesInputDeviceRoutes
                                ? inputDevicesPathPrefix
                                : usesOutputDeviceRoutes
                                  ? outputDevicesPathPrefix
                                  : usesDynamicChildRoutes
                                    ? topic.childRouteBase
                                    : null;
                            const isExpanded = expandedTopicIds.has(topic.id);

                            return (
                                <li key={topic.id}>
                                    <div
                                        className={[
                                            'rounded-full border-2 transition-transform duration-200',
                                            isActive ? t.linkActive : t.linkIdle,
                                            'hover:scale-[1.02] active:scale-[0.98]',
                                        ].join(' ')}
                                    >
                                        <div className="flex items-stretch gap-0.5 pr-1">
                                            <Link
                                                to={`/class${classId}/${topic.id}.html`}
                                                className="group flex min-w-0 flex-1 items-center gap-3 rounded-full px-4 py-3"
                                            >
                                                <span
                                                    className={[
                                                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-inner [&_svg]:h-[1.1rem] [&_svg]:w-[1.1rem]',
                                                        isActive ? t.iconActive : t.iconIdle,
                                                    ].join(' ')}
                                                >
                                                    {topic.icon}
                                                </span>
                                                <SidebarTitleText
                                                    className={[
                                                        'font-nunito font-extrabold leading-snug text-left text-[0.72rem] sm:text-[0.82rem]',
                                                        isActive ? t.textActive : t.textIdle,
                                                    ].join(' ')}
                                                >
                                                    {topic.title}
                                                </SidebarTitleText>
                                            </Link>
                                            {hasChildren ? (
                                                <button
                                                    type="button"
                                                    onClick={(e) => toggleExpand(topic.id, e)}
                                                    className="flex shrink-0 items-center justify-center rounded-full px-2 py-2 text-slate-600 transition hover:bg-black/5"
                                                    aria-expanded={isExpanded}
                                                    aria-label={isExpanded ? 'Collapse subtopics' : 'Expand subtopics'}
                                                >
                                                    <ChevronDown
                                                        className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                        aria-hidden
                                                    />
                                                </button>
                                            ) : null}
                                        </div>
                                    </div>
                                    {hasChildren && isExpanded ? (
                                        <ul className="mt-2 space-y-1.5 pl-4">
                                            {topic.children.map((child) => {
                                                const isDeviceSublessonTopic =
                                                    (String(classId) === '2' && topic.id === 'computer-parts-1') ||
                                                    (String(classId) === '3' && topic.id === 'parts-of-computer-2') ||
                                                    usesDynamicChildRoutes;
                                                const childFontSize = isDeviceSublessonTopic
                                                    ? 'text-[0.8rem] sm:text-[0.9rem]'
                                                    : 'text-[0.72rem] sm:text-[0.82rem]';

                                                const childPath = usesDeviceSublessonRoutes
                                                    ? `${deviceSublessonPrefix}${child.slug}`
                                                    : child.topicId
                                                      ? `/class${classId}/${child.topicId}.html`
                                                      : `/class${classId}/${topic.id}.html#${child.id || child.slug}`;
                                                const childActive = usesDeviceSublessonRoutes
                                                    ? location.pathname === childPath
                                                    : child.topicId
                                                      ? activeTopicId === child.topicId
                                                      : activeTopicId === topic.id && location.hash === `#${child.id}`;
                                                return (
                                                    <li key={child.slug || child.id || child.label}>
                                                        <Link
                                                            to={childPath}
                                                            className={[
                                                                'block rounded-xl px-3 py-2 text-left font-nunito font-bold transition-colors border',
                                                                childFontSize,
                                                                childActive
                                                                    ? 'bg-white/90 border-primary/40 text-primary shadow-sm'
                                                                    : 'border-transparent text-slate-600 hover:bg-white/50 hover:text-slate-900',
                                                            ].join(' ')}
                                                        >
                                                            <SidebarTitleText>{child.label}</SidebarTitleText>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    ) : null}
                                </li>
                            );
                        })}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default KidTopicSidebar;
