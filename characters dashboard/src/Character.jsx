import React, { useState } from "react";

function Character({ characters, setCharacters }) {
    const [editing, setEditing] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
    });

    const deleteCharacter = (id) => {
        setCharacters(characters.filter((character) => character.id !== id));
    };

    const startEditing = (character) => {
        setEditing(character.id);
        setFormData({
            name: character.name,
            description: character.description,
            image: character.image,
        });
    };

    const saveChanges = (id) => {
        setCharacters(
            characters.map((character) =>
                character.id === id
                    ? { ...character, name: formData.name, description: formData.description, image: formData.image }
                    : character
            )
        );
        setEditing(null);
    };

    return (
        <div className="character-box">
            {characters.map((character) => (
                <div className="portrait" key={character.id}>
                    {editing === character.id ? (
                        <div className="edit-mode">
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="text"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                            <input
                                type="text"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            />
                            <button onClick={() => saveChanges(character.id)}>Save Changes</button>
                        </div>
                    ) : (
                        <div className="character-info">
                            <h2>{character.name}</h2>
                            <img src={character.image} alt={character.name} />
                            <p>{character.description}</p>
                            <button onClick={() => startEditing(character)}>Edit</button>
                            <button onClick={() => deleteCharacter(character.id)}>Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Character;
