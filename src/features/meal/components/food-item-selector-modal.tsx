import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { FoodItemSearch } from './food-item-search.tsx';
import { FoodItem } from '../../food/models/food-item.ts';

export const FoodItemSelectorModal = ({ onAdd }: { onAdd: (item?: FoodItem) => void }) => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const [modalPlacement, setModalPlacement] = useState<string>('center');
    const props = { openModal, setOpenModal, modalPlacement, setModalPlacement };

    const selectItemAndClose = (item?: FoodItem) => {
        onAdd(item)
        props.setOpenModal(undefined)
    }

    return (
        <div className="flex justify-center">
            <button type="button" onClick={ () => setOpenModal('default') }
                    className="material-icons-round text-4xl text-cyan-300 font-medium hover:text-cyan-400">add
            </button>
            <Modal show={ props.openModal === 'default' } onClose={ () => props.setOpenModal(undefined) }>
                <Modal.Header>Add Ingredient</Modal.Header>
                <Modal.Body>
                    <FoodItemSearch onFoodItemSelected={ selectItemAndClose }/>
                </Modal.Body>
            </Modal>
        </div>
    )
}
