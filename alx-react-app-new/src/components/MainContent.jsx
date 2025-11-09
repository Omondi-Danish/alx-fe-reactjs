function MainContent() {
  return (
    <main
      style={{
        backgroundColor: "limegreen",
        color: "white",
        padding: "20px",
        position: 'relative',
        clipPath:
          "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)"
      }}
    >
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}
export default MainContent;
