import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Filters, SearchContainer, ToolbarContainer } from './styles'

interface toolbarProps {
    search?: React.ReactNode,
    filters?: React.ReactNode,
    hideFilters: boolean,
    handleToggleFilters: React.MouseEventHandler<HTMLButtonElement>,
}

export const Toolbar = ({
    search,
    filters,
    hideFilters,
    handleToggleFilters,
}: toolbarProps) => (
    <ToolbarContainer>
        <SearchContainer>
            <div className='search'>{search}</div>
            <IconButton className='hideFilters' color='unahurBlack' size='large' onClick={handleToggleFilters}>
            { hideFilters ? <ArrowDropDown /> : <ArrowDropUp /> }
            </IconButton>
        </SearchContainer>
        { !hideFilters && <Filters>{filters}</Filters> }
    </ToolbarContainer>
)