import { useEffect, useState } from 'react';

import Button from "./Button"

export default function Input() {
    return (
        <>
            <form >
                <section className='inputContainer'>
                    <section className='inputContainer__inputGroup'>
                        <div className='inputGroup__content'>
                        <input
                            type='url'
                            name='url'
                            pattern='http?://.*'
                            size='30'
                            placeholder='Shorten a link here...'
                            required
                        />
                            <Button type="btn btn--input" text="Shorten it!" />
                        </div>
                    </section>
                </section>
            </form>
        </>
    )
}