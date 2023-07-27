export const BlurOverlay = ({ visible }: { visible: boolean }) =>
    visible
        ? <div className="absolute top-0 left-0 h-full w-full z-50 bg-white/50 flex items-start"></div>
        : <></>