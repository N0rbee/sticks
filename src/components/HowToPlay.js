import Modal from "./Modal";

function HowToPlay({open, onClose}) {

  return (
    <Modal open={open} title="How to play" onClose={onClose}>
      <p>
        There are "N" sticks on the table.
        A player in his or her turn can pick min. "a" or max. "b" sticks.
        The player who can't pick or can only pick min. "a" sticks loses the game.
      </p>
    </Modal>
  );
}

export default HowToPlay;