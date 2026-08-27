
function Footer() {
  const openHour = 7
  const closeHour = 20 
  const hour = new Date().getHours();
  const isOpen = hour > openHour && hour < closeHour;
  console.log(isOpen);
  return (
    <div>
      {isOpen ? (
        <p>បើកដំណើរការ</p>
      ) : (
        <p>
          ហាងយើងខ្ញុំបើកដំនោះរការនៅ​ចន្លោះម៉ោង {openHour}:00​​ AM​ ដល់ម៉ោង{" "}
          {closeHour}:00 PM
        </p>
      )}
    </div>
  );
}

export default Footer