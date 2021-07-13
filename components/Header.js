import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="grey"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="md:inline-flex h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2 text-gray-700">Dokumenty</h1>
      <div className="md:mx-20 flex flex-grow items-center px-5 py-2 mx-5  bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="grey" />
        <input
          type="text"
          className="flex-grow px-5 text-base bg-transparent outline-none"
          placeholder="Szukaj"
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className=" ml-5 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="grey" />
      </Button>
      <img
        loading="lazy"
        // onClick={signOut}
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src={
          "https://michal-nitka-portfolio.netlify.app/static/e09087d44438106576086dc8e9d79aeb/2a4de/12894068debdf32f07fadf2d9091a4b3.png"
        }
        alt=""
      />
    </div>
  );
}

export default Header;
