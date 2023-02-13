export function HandleScreen() {
  const size = useWindowSize();
  return size;
}
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    var windowSize = {
    width: undefined,
    height: undefined,
  };
  
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    return windowSize;
}