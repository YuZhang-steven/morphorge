// ─── Design tokens ────────────────────────────────────────────────────────────

// Text and accent colours — work on all five red-family surfaces
export const P = {
    cream: '#d61f1f',   // bg reference (base red)
    sand: '#c41b1b',   // slightly darker for inset wells
    stone: '#e05050',   // muted red for inactive fills
    ink: '#ffffff',   // primary text on red
    rust: '#ffb8a8',   // warm coral accent
    sage: '#7dd4c2',   // mint accent
    sky: '#88c6ff',   // sky-blue accent
    amber: '#ffd06e',   // gold accent
    plum: '#dfb8ea',   // lilac accent
    blush: '#ffcdc8',   // pale pink accent
};

// Five harmonious red-family neumorphic palettes.
// Each: surface bg, dark shadow colour, light highlight colour.
// The shadow pair is tuned to each hue so depth reads correctly.
export const NEUM_PALETTES = [
    { bg: '#d61f1f', shadowDark: '#7e1212', shadowLight: '#ff2c2c' }, // 0 flame   (original)
    { bg: '#b51919', shadowDark: '#6b0f0f', shadowLight: '#de2020' }, // 1 deep
    { bg: '#e0501c', shadowDark: '#8a2c0c', shadowLight: '#ff6030' }, // 2 vermillion
    { bg: '#c41f48', shadowDark: '#741228', shadowLight: '#f02858' }, // 3 crimson
    { bg: '#9e1f1f', shadowDark: '#5e1212', shadowLight: '#c42424' }, // 4 maroon
];

// Minimum pixel heights for each NeumBlock cell (label sits below in doc flow)
export const HEIGHT_MAP = { short: 220, medium: 280, tall: 380 };
