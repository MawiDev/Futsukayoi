export default function Footer({isClicked}) {
  console.log(isClicked)
  return (
    <footer className={isClicked ? `bg-yellow-400 text-[#454545] p-8`:`bg-[#454545] text-white p-8` }>
      <p class="text-base leading-6 text-center">
        © 2024 <a href="https://www.riccardosavio.dev" className={isClicked ? 'text-[#454545]':`text-white`}>Risadev</a>
      </p>
    </footer>
  );
}
