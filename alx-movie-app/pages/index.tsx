import Button from "@/components/layout/Button";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {

  const router = useRouter()
  return(
    <div>
      <section>

        <div>
          <h1> Discover Your Next Favorite <span>Movie</span></h1>
          <p>  Explore the latest blockbuster movies, critically acclaimed films,
            and your personal favorites – all in one place.</p>
                    <Button
            title="Browse Movies"
            action={() => router.push("/movies")}
          />
            
        </div>
      </section>

      <section>
        <h2> Join CineSeek Now!</h2>
        <p>Sign up today to get access to the latest movies, exclusive content,
          and personalized movie recommendations.</p>
        <Button title="Get Started"/>
      </section>

    </div>
  )
}
export default Home;
