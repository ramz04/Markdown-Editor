import React, {useState} from "react"
import R from "react-mde"
const ReactMde = R.default
import Showdown from "showdown"
import PropTypes from 'prop-types';


export default function Editor({currentNote, updateNote}) {
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}

Editor.propTypes = {
    updateNote: PropTypes.func.isRequired,
    currentNote: PropTypes.func.isRequired,
  };
