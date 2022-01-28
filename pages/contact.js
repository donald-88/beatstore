import Textinput from '../components/dom/textinput'
import Button1 from '../components/dom/button1'
const Contact = () => {
  return(
    <div className="flex flex-col pt-10 pl-8 pr-8">
      <h1 className="text-7xl mb-2">WANT CUSTOM BEATS?</h1>
      <p>We love interacting and collaborating. Send us your ideas through the form below.</p>
      <Textinput placeholder="Name"/>
      <Textinput placeholder="Email"/>

      <div className="flex mt-4">
        <div className="relative w-full">
          <input
            className="rounded-lg border border-custom-white bg-black placeholder-custom-white text-lg xt-lg h-32 w-full pl-4 pb-20" placeholder="Message">
          </input>
        </div>
      </div>

      <Button1 name="Send"/>
    </div>
  )
}

export default Contact
