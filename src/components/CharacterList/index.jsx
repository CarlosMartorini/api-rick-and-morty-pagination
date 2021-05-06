import { Component } from "react";
import Character from "../Character";

class CharacterList extends Component {
    render() {
        const { list } = this.props;
        return(
            <>
            {
                list.map((char) => (
                    <Character key ={char.id} char={char} />
                ))
            }
            </>
        )
    }
}

export default CharacterList;